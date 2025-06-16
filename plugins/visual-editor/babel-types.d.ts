// TypeScript type declarations for Babel JSX elements
// These types extend the existing @babel/types definitions

// We'll use a simpler approach that merges with existing types
// instead of trying to extend them directly

declare module '@babel/types' {
  // Base node with position information
  interface BaseNode {
    start?: number | null;
    end?: number | null;
    loc?: {
      start: { line: number; column: number };
      end: { line: number; column: number };
    } | null;
  }

  // Extend JSX element types to include position information
  interface JSXElement extends BaseNode {
    type: 'JSXElement';
    openingElement: JSXOpeningElement;
    closingElement: JSXClosingElement | null;
    children: Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment>;
    selfClosing?: boolean;
  }

  interface JSXOpeningElement extends BaseNode {
    type: 'JSXOpeningElement';
    name: JSXIdentifier | JSXMemberExpression | JSXNamespacedName;
    attributes: Array<JSXAttribute | JSXSpreadAttribute>;
    selfClosing: boolean;
  }

  // JSX element name types
  interface JSXIdentifier extends BaseNode {
    type: 'JSXIdentifier';
    name: string;
  }

  interface JSXMemberExpression extends BaseNode {
    type: 'JSXMemberExpression';
    object: JSXMemberExpression | JSXIdentifier;
    property: JSXIdentifier;
  }

  // JSX attribute types
  interface JSXAttribute extends BaseNode {
    type: 'JSXAttribute';
    name: JSXIdentifier | JSXNamespacedName;
    value: JSXElement | JSXExpressionContainer | StringLiteral | null;
  }

  interface StringLiteral extends BaseNode {
    type: 'StringLiteral';
    value: string;
    extra?: {
      raw: string;
      rawValue: string;
    };
  }

  // JSX content types
  interface JSXText extends BaseNode {
    type: 'JSXText';
    value: string;
  }

  interface JSXExpressionContainer extends BaseNode {
    type: 'JSXExpressionContainer';
    expression: any; // Simplified to any to avoid complex type definitions
  }

  interface JSXSpreadChild extends BaseNode {
    type: 'JSXSpreadChild';
    expression: any; // Simplified to any to avoid complex type definitions
  }

  // JSX fragment types
  interface JSXFragment extends BaseNode {
    type: 'JSXFragment';
    openingFragment: JSXOpeningFragment;
    closingFragment: JSXClosingFragment;
    children: Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment>;
  }

  interface JSXOpeningFragment extends BaseNode {
    type: 'JSXOpeningFragment';
  }

  interface JSXClosingFragment extends BaseNode {
    type: 'JSXClosingFragment';
  }

  // Other JSX types
  interface JSXSpreadAttribute extends BaseNode {
    type: 'JSXSpreadAttribute';
    argument: any; // Simplified to any to avoid complex type definitions
  }

  interface JSXNamespacedName extends BaseNode {
    type: 'JSXNamespacedName';
    namespace: JSXIdentifier;
    name: JSXIdentifier;
  }

  interface JSXClosingElement extends BaseNode {
    type: 'JSXClosingElement';
    name: JSXIdentifier | JSXMemberExpression | JSXNamespacedName;
  }

  // Re-export types that we need to reference
  type Expression = any;
  type Node = any;
}
