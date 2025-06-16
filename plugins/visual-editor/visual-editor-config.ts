/**
 * Configuration for the visual editor popup and edit mode styles
 */

export const POPUP_STYLES = `
#inline-editor-popup {
  width: 360px;
  position: fixed;
  z-index: 10000;
  background: #161718;
  color: white;
  border: 1px solid #4a5568;
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  flex-direction: column;
  gap: 10px;
  display: none;
}

@media (max-width: 768px) {
  #inline-editor-popup {
    width: calc(100% - 20px);
  }
}

#inline-editor-popup.is-active {
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#inline-editor-popup.is-disabled-view {
  padding: 10px 15px;
}

#inline-editor-popup textarea {
  height: 100px;
  padding: 4px 8px;
  background: transparent;
  color: white;
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.42;
  resize: none;
  outline: none;
}

#inline-editor-popup .button-container {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

#inline-editor-popup button {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
  font-weight: 500;
}

#inline-editor-popup .save-button {
  background: #357DF9;
  color: white;
}

#inline-editor-popup .cancel-button {
  background: transparent;
  color: #a0aec0;
}

#inline-editor-popup .cancel-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

#inline-editor-popup .disabled-message {
  margin: 0;
  font-size: 0.875rem;
  color: #a0aec0;
}`;

export const getPopupHTMLTemplate = (saveLabel: string, cancelLabel: string): string => `
  <div id="inline-editor-popup">
    <textarea id="inline-editor-textarea" spellcheck="false"></textarea>
    <div class="button-container">
      <button id="inline-editor-cancel" class="cancel-button">${cancelLabel}</button>
      <button id="inline-editor-save" class="save-button">${saveLabel}</button>
    </div>
  </div>
`;

export const EDIT_MODE_STYLES = `
  #root[data-edit-mode-enabled="true"] [data-edit-id] {
    cursor: pointer; 
    outline: 1px dashed #357DF9; 
    outline-offset: 4px;
    border-radius: 2px;
    position: relative;
  }

  #root[data-edit-mode-enabled="true"] [data-edit-id]:hover::after {
    content: attr(data-edit-id);
    position: absolute;
    top: -24px;
    left: 0;
    background: #357DF9;
    color: white;
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 4px;
    white-space: nowrap;
    pointer-events: none;
    z-index: 1000;
  }

  #root[data-edit-mode-enabled="true"] [data-edit-id].is-editing {
    outline: 2px solid #357DF9;
    outline-offset: 2px;
  }

  #root[data-edit-mode-enabled="true"] [data-edit-id].is-editing::after {
    content: 'Editing: ' attr(data-edit-id);
    background: #2c5282;
  }
`;

export const EDIT_BUTTON_STYLES = `
  #edit-mode-toggle {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 1000;
    background: #357DF9;
    color: white;
    border: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
  }

  #edit-mode-toggle:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  #edit-mode-toggle:active {
    transform: translateY(0);
  }
`;
