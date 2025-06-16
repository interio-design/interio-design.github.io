// Types for the visual editor
export interface EditingInfo {
  element: HTMLElement;
  editId: string;
  originalText: string;
}

export interface Translations {
  cancel: string;
  save: string;
  addText: string;
  disabledTooltipText: string;
  [key: string]: string;
}

export interface GlobalEventHandlers {
  handleClick: (event: MouseEvent) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleScroll: () => void;
  handleResize: () => void;
}

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
