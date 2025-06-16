// Type definitions for the edit mode script

// Interface for the editing information
export interface EditingInfo {
  element: HTMLElement;
  editId: string;
  originalText: string;
}

// Interface for translations
export interface Translations {
  cancel: string;
  save: string;
  addText: string;
  disabledTooltipText: string;
  [key: string]: string;
}

// Interface for global event handlers
export interface GlobalEventHandlers {
  handleClick: (event: MouseEvent) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleScroll: () => void;
  handleResize: () => void;
}

// Interface for message event data
export interface MessageEventData {
  type: string;
  translations?: Partial<Translations>;
}

// Extend the Window interface
declare global {
  interface Window {
    enableInlineEditing: () => void;
    disableInlineEditing: () => void;
  }
}
