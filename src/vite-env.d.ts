/// <reference types="vite/client" />

// Add type declarations for environment variables
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Add other environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
