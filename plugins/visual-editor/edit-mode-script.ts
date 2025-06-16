import { POPUP_STYLES, getPopupHTMLTemplate } from './visual-editor-config';

// Type definitions
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
  [key: string]: string | undefined;  // Allow undefined values for dynamic properties
}

interface MessageEventData {
  type: string;
  translations?: Partial<Translations>;
}

interface GlobalEventHandlers {
  handleClick: (event: MouseEvent) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleScroll: () => void;
  handleResize: () => void;
}

declare global {
  interface Window {
    enableInlineEditing: () => void;
    disableInlineEditing: () => void;
  }
}

const PLUGIN_APPLY_EDIT_API_URL = '/api/apply-edit';

const ALLOWED_PARENT_ORIGINS = [
  'https://horizons.hostinger.com',
  'https://horizons.hostinger.dev',
  'https://horizons-frontend-local.hostinger.dev',
  'http://localhost:4000',
];

let popupElement: HTMLElement | null = null;
let popupTextarea: HTMLTextAreaElement | null = null;
let popupSaveButton: HTMLButtonElement | null = null;
let popupCancelButton: HTMLButtonElement | null = null;
let currentEditingInfo: EditingInfo | null = null;
let disabledTooltipElement: HTMLElement | null = null;

// Define translations with all required properties
let translations: Translations = {
  cancel: 'Cancel',
  save: 'Save',
  addText: 'Add text',
  disabledTooltipText: "This text can be changed only through chat.",
  // Add an empty string as the default for the index signature
  '': ''
};

// Helper function to safely update translations
function updateTranslations(newTranslations: Partial<Translations>): void {
  Object.entries(newTranslations).forEach(([key, value]) => {
    if (value !== undefined) {
      translations[key] = value;
    }
  });
}

let areStylesInjected = false;
let globalEventHandlers: GlobalEventHandlers | null = null;

function injectPopupStyles(): void {
  if (areStylesInjected) return;

  const styleElement = document.createElement('style');
  styleElement.id = 'inline-editor-styles';
  styleElement.textContent = POPUP_STYLES;
  document.head.appendChild(styleElement);
  areStylesInjected = true;
}

function createPopup(): void {
  if (popupElement) return;

  injectPopupStyles();

  popupElement = document.createElement('div');
  popupElement.id = 'inline-editor-popup';
  
  popupElement.innerHTML = getPopupHTMLTemplate(translations.save, translations.cancel);
  document.body.appendChild(popupElement);
  
  popupTextarea = document.getElementById('inline-editor-textarea') as HTMLTextAreaElement;
  popupSaveButton = document.getElementById('inline-editor-save') as HTMLButtonElement;
  popupCancelButton = document.getElementById('inline-editor-cancel') as HTMLButtonElement;

  if (popupSaveButton) {
    popupSaveButton.addEventListener('click', handlePopupSave);
  }
  
  if (popupCancelButton) {
    popupCancelButton.addEventListener('click', handlePopupCancel);
  }
}

function showPopup(targetElement: HTMLElement, editId: string, currentText: string): void {
  if (!popupElement || !popupTextarea) return;

  currentEditingInfo = {
    element: targetElement,
    editId,
    originalText: currentText
  };

  popupTextarea.value = currentText;
  popupElement.classList.add('is-active');
  popupTextarea.focus();
  
  // Position the popup
  const rect = targetElement.getBoundingClientRect();
  popupElement.style.top = `${window.scrollY + rect.top + rect.height + 10}px`;
  popupElement.style.left = `${window.scrollX + rect.left}px`;
  
  // Add click outside handler
  setTimeout(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, 0);
}

function hidePopup(): void {
  if (!popupElement) return;
  
  popupElement.classList.remove('is-active');
  document.removeEventListener('click', handleClickOutside, true);
  
  if (currentEditingInfo) {
    currentEditingInfo.element.classList.remove('is-editing');
    currentEditingInfo = null;
  }
}

function handleClickOutside(event: MouseEvent): void {
  if (popupElement && !popupElement.contains(event.target as Node)) {
    hidePopup();
  }
}

function handleGlobalEvent(event: Event): void {
  if (!currentEditingInfo) return;
  
  if (event.type === 'keydown' && (event as KeyboardEvent).key === 'Escape') {
    event.preventDefault();
    hidePopup();
    return;
  }
  
  if (event.type === 'scroll' || event.type === 'resize') {
    if (popupElement && currentEditingInfo) {
      const rect = currentEditingInfo.element.getBoundingClientRect();
      popupElement.style.top = `${window.scrollY + rect.top + rect.height + 10}px`;
      popupElement.style.left = `${window.scrollX + rect.left}px`;
    }
    return;
  }
  
  if (event.type === 'click' && event.target !== popupElement && !popupElement?.contains(event.target as Node)) {
    hidePopup();
  }
}

function getParentOrigin(): string | null {
  try {
    if (window.self === window.top) {
      return window.location.origin;
    }
    
    // For iframes, try to get the parent origin
    if (window.parent) {
      return new URL(document.referrer).origin;
    }
  } catch (e) {
    console.error('Error getting parent origin:', e);
  }
  
  return null;
}

async function handlePopupSave(): Promise<void> {
  if (!popupTextarea || !currentEditingInfo) return;
  
  const newText = popupTextarea.value.trim();
  const { element, editId, originalText } = currentEditingInfo;
  
  if (newText === originalText) {
    hidePopup();
    return;
  }
  
  try {
    const parentOrigin = getParentOrigin();
    
    if (parentOrigin && !ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {
      console.error('Invalid parent origin:', parentOrigin);
      return;
    }
    
    const response = await fetch(PLUGIN_APPLY_EDIT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        editId,
        newText,
        originalText,
        url: window.location.href,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    element.textContent = newText;
    element.dispatchEvent(new CustomEvent('edit-saved', { 
      detail: { editId, newText, originalText } 
    }));
    
  } catch (error) {
    console.error('Error saving edit:', error);
    alert('Failed to save changes. Please try again.');
  } finally {
    hidePopup();
  }
}

function handlePopupCancel(): void {
  hidePopup();
}

function createDisabledTooltip(): void {
  if (disabledTooltipElement) return;
  
  disabledTooltipElement = document.createElement('div');
  disabledTooltipElement.className = 'disabled-tooltip';
  disabledTooltipElement.textContent = translations.disabledTooltipText;
  document.body.appendChild(disabledTooltipElement);
}

function showDisabledTooltip(targetElement: HTMLElement): void {
  if (!disabledTooltipElement) createDisabledTooltip();
  if (!disabledTooltipElement) return;
  
  const rect = targetElement.getBoundingClientRect();
  
  disabledTooltipElement.style.display = 'block';
  disabledTooltipElement.style.position = 'fixed';
  disabledTooltipElement.style.top = `${window.scrollY + rect.top - 30}px`;
  disabledTooltipElement.style.left = `${window.scrollX + rect.left}px`;
  
  // Hide after 2 seconds
  setTimeout(() => {
    if (disabledTooltipElement) {
      disabledTooltipElement.style.display = 'none';
    }
  }, 2000);
}

function hideDisabledTooltip(): void {
  if (disabledTooltipElement) {
    disabledTooltipElement.style.display = 'none';
  }
}

function handleDisabledElementHover(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  if (target.matches('[data-edit-id]:not([data-edit-enabled])')) {
    showDisabledTooltip(target);
  }
}

function handleDisabledElementLeave(): void {
  hideDisabledTooltip();
}

export function enableEditMode(): void {
  if (globalEventHandlers) return; // Already enabled
  
  createPopup();
  createDisabledTooltip();
  
  // Create the global event handlers object with proper typing
  const handlers: GlobalEventHandlers = {
    handleClick: (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const editableElement = target.closest('[data-edit-id]');
      
      if (!editableElement) return;
      
      event.preventDefault();
      event.stopPropagation();
      
      const editId = editableElement.getAttribute('data-edit-id');
      const isEnabled = editableElement.hasAttribute('data-edit-enabled');
      
      if (!editId) return;
      
      if (!isEnabled) {
        showDisabledTooltip(editableElement as HTMLElement);
        return;
      }

      showPopup(editableElement as HTMLElement, editId, (editableElement.textContent || '').trim());
      editableElement.classList.add('is-editing');
    },
    handleKeyDown: (event: KeyboardEvent) => {
      if (event.key === 'Escape' && popupElement?.classList.contains('is-active')) {
        event.preventDefault();
        hidePopup();
      }
    },
    handleScroll: () => {
      if (popupElement?.classList.contains('is-active') && currentEditingInfo) {
        const rect = currentEditingInfo.element.getBoundingClientRect();
        popupElement.style.top = `${window.scrollY + rect.top + rect.height + 10}px`;
      }
    },
    handleResize: () => {
      if (popupElement?.classList.contains('is-active') && currentEditingInfo) {
        const rect = currentEditingInfo.element.getBoundingClientRect();
        popupElement.style.top = `${window.scrollY + rect.top + rect.height + 10}px`;
      }
    }
  };
  
  // Assign the handlers to the global variable
  globalEventHandlers = handlers;
  
  // Add event listeners
  if (globalEventHandlers) {
    document.addEventListener('click', globalEventHandlers.handleClick, true);
    document.addEventListener('keydown', globalEventHandlers.handleKeyDown);
    window.addEventListener('scroll', globalEventHandlers.handleScroll);
    window.addEventListener('resize', globalEventHandlers.handleResize);
  }
  
  // Add hover for disabled elements
  document.addEventListener('mouseover', handleDisabledElementHover);
  document.addEventListener('mouseout', handleDisabledElementLeave);
  
  // Set data attribute on root
  document.documentElement.setAttribute('data-edit-mode-enabled', 'true');
}

export function disableEditMode(): void {
  if (!globalEventHandlers) return; // Already disabled
  
  // Remove event listeners safely
  if (globalEventHandlers) {
    document.removeEventListener('click', globalEventHandlers.handleClick, true);
    document.removeEventListener('keydown', globalEventHandlers.handleKeyDown);
    window.removeEventListener('scroll', globalEventHandlers.handleScroll);
    window.removeEventListener('resize', globalEventHandlers.handleResize);
  }
  
  // Remove hover handlers
  document.removeEventListener('mouseover', handleDisabledElementHover);
  document.removeEventListener('mouseout', handleDisabledElementLeave);
  
  // Clean up
  globalEventHandlers = null;
  hidePopup();
  hideDisabledTooltip();
  
  // Remove data attribute from root
  document.documentElement.removeAttribute('data-edit-mode-enabled');
}

// Make functions available globally
window.enableInlineEditing = enableEditMode;
window.disableInlineEditing = disableEditMode;

// Listen for messages from parent window
window.addEventListener("message", function(event: MessageEvent<MessageEventData>) {
  if (event.data?.type === "enable-edit-mode") {
    if (event.data?.translations) {
      translations = { ...translations, ...event.data.translations };
    }
    enableEditMode();
  } else if (event.data?.type === "disable-edit-mode") {
    disableEditMode();
  }
});
