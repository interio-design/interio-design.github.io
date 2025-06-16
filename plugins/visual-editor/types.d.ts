declare global {
  interface Window {
    enableInlineEditing: () => void;
    disableInlineEditing: () => void;
  }

  interface EditingInfo {
    element: HTMLElement;
    editId: string;
    originalText: string;
  }

  interface Translations {
    cancel: string;
    save: string;
    addText: string;
    disabledTooltipText: string;
    [key: string]: string;
  }

  interface GlobalEventHandlers {
    click: (event: Event) => void;
    keydown: (event: KeyboardEvent) => void;
    scroll: () => void;
    resize: () => void;
  }

  interface MessageEventData {
    type: string;
    translations?: Partial<Translations>;
  }
}

export {};
