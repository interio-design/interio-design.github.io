import path from "path";
import { fileURLToPath } from "url";
import { parse } from "@babel/parser";
import generate from "@babel/generator";
import * as t from "@babel/types";
import fs from "fs";
import type { PluginOption } from "vite";
import traverse from "@babel/traverse";

// We'll use dynamic import for traverse in the transform function

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const VITE_PROJECT_ROOT = path.resolve(__dirname, "../..");
const EDITABLE_HTML_TAGS = [
  "a",
  "Button",
  "button",
  "p",
  "span",
  "h1",
  "h2",
  "h3",
  "h4",
];

interface EditIdParts {
  filePath: string;
  line: number;
  column: number;
}

function parseEditId(editId: string): EditIdParts | null {
  const parts = editId.split(":");

  if (parts.length < 3) {
    return null;
  }

  const column = parseInt(parts.at(-1) || "0", 10);
  const line = parseInt(parts.at(-2) || "0", 10);
  const filePath = parts.slice(0, -2).join(":");

  if (!filePath || isNaN(line) || isNaN(column)) {
    return null;
  }

  return { filePath, line, column };
}

function checkTagNameEditable(
  openingElementNode: t.JSXOpeningElement | null | undefined,
  editableTagsList: string[]
): boolean {
  if (!openingElementNode || !openingElementNode.name) return false;
  const nameNode = openingElementNode.name;

  // Check 1: Direct name (for <p>, <Button>)
  if (
    nameNode.type === "JSXIdentifier" &&
    editableTagsList.includes(nameNode.name)
  ) {
    return true;
  }

  // Check 2: Property name of a member expression (for <motion.h1>, check if "h1" is in editableTagsList)
  if (
    nameNode.type === "JSXMemberExpression" &&
    nameNode.property &&
    nameNode.property.type === "JSXIdentifier" &&
    editableTagsList.includes(nameNode.property.name)
  ) {
    return true;
  }

  return false;
}

interface InlineEditOptions {
  /**
   * List of HTML/React component names that should be editable
   * @default ["a", "Button", "button", "p", "span", "h1", "h2", "h3", "h4"]
   */
  editableTags?: string[];

  /**
   * Whether to enable debug logging
   * @default false
   */
  debug?: boolean;
}

export default function inlineEditPlugin(
  options: InlineEditOptions = {}
): PluginOption {
  const { editableTags = EDITABLE_HTML_TAGS, debug = false } = options;

  return {
    name: "vite:react-inline-editor",
    enforce: "pre",

    async transform(code: string, id: string) {
      // Dynamically import traverse
      // const { default: traverse } = await import("@babel/traverse");

      // Only process .jsx and .tsx files
      if (!id.match(/\.(jsx|tsx)$/)) {
        return null;
      }

      // Skip node_modules
      if (id.includes("node_modules")) {
        return null;
      }

      try {
        const ast = parse(code, {
          sourceType: "module",
          plugins: ["jsx", "typescript", "decorators-legacy"],
          tokens: true,
        });

        let hasEdits = false;

        traverse.default(ast, {
          JSXElement(jsxPath: any) {
            const node = jsxPath.node as t.JSXElement;
            const openingElement = node.openingElement;

            // Skip if already has data-edit-id
            const hasEditId = openingElement.attributes.some(
              (attr: any) =>
                attr.type === "JSXAttribute" &&
                attr.name.name === "data-edit-id"
            );

            if (hasEditId) return;

            // Check if the tag is in our editable list
            const isEditable = checkTagNameEditable(
              openingElement,
              editableTags
            );
            if (!isEditable) return;

            // Skip if no text content
            const textContent = node.children
              .filter((child: any) => child.type === "JSXText")
              .map((child: any) => child.value.trim())
              .filter(Boolean)
              .join(" ");

            if (!textContent) return;

            // Generate a unique ID based on file location
            const line = node.loc?.start.line || 0;
            const column = node.loc?.start.column || 0;
            const relativePath = path.relative(VITE_PROJECT_ROOT, id);
            const editId = `${relativePath}:${line}:${column}`;

            // Add data-edit-id attribute
            openingElement.attributes.push(
              t.jsxAttribute(
                t.jsxIdentifier("data-edit-id"),
                t.stringLiteral(editId)
              )
            );

            hasEdits = true;

            if (debug) {
              console.log(
                `[vite:react-inline-editor] Added edit ID to element at ${id}:${line}:${column}`
              );
            }
          },
        });

        if (!hasEdits) return null;

        // Generate the new code
        const output = generate.default(
          ast,
          {
            retainLines: true,
            retainFunctionParens: true,
            jsescOption: {
              minimal: true,
            },
          },
          code
        );

        return {
          code: output.code,
          map: output.map,
        };
      } catch (error) {
        console.error("[vite:react-inline-editor] Error processing file:", id);
        console.error(error);
        return null;
      }
    },

    configureServer(server) {
      // Handle API requests for saving edits
      server.middlewares.use("/api/apply-edit", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method Not Allowed");
          return;
        }

        try {
          let body = "";
          for await (const chunk of req) {
            body += chunk;
          }

          const { editId, newText, originalText, url } = JSON.parse(body);

          if (!editId || !newText || !originalText) {
            res.statusCode = 400;
            res.end("Missing required fields");
            return;
          }

          const editInfo = parseEditId(editId);

          if (!editInfo) {
            res.statusCode = 400;
            res.end("Invalid edit ID format");
            return;
          }

          const { filePath, line, column } = editInfo;
          const absolutePath = path.resolve(VITE_PROJECT_ROOT, filePath);

          // Read the file
          let fileContent = fs.readFileSync(absolutePath, "utf-8");
          const lines = fileContent.split("\n");

          // Find the line to edit
          const targetLine = lines[line - 1];
          if (!targetLine) {
            res.statusCode = 400;
            res.end("Line not found in file");
            return;
          }

          // Find the text to replace
          const beforeText = targetLine.substring(0, column);
          const afterText = targetLine.substring(column + originalText.length);

          // Update the line with new text
          lines[line - 1] = `${beforeText}${newText}${afterText}`;

          // Write the file back
          fs.writeFileSync(absolutePath, lines.join("\n"));

          if (debug) {
            console.log(
              `[vite:react-inline-editor] Updated ${absolutePath}:${line}:${column}`
            );
            console.log(`  Old text: ${originalText}`);
            console.log(`  New text: ${newText}`);
          }

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: true }));

          // Trigger HMR for the modified file
          const serverInstance = server;
          const module = serverInstance.moduleGraph.getModuleById(absolutePath);
          if (module) {
            serverInstance.reloadModule(module);
          }
        } catch (error) {
          console.error(
            "[vite:react-inline-editor] Error handling edit request:",
            error
          );
          res.statusCode = 500;
          res.end("Internal Server Error");
        }
      });
    },
  };
}
