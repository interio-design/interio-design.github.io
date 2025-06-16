import * as React from 'react';

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function generateId(): string {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

type ToasterToast = {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  action?: React.ReactNode;
  duration?: number;
};

type ToastState = {
  toasts: ToasterToast[];
};

type ToastStore = {
  state: ToastState;
  listeners: Array<(state: ToastState) => void>;
  getState: () => ToastState;
  setState: (state: ToastState | ((prev: ToastState) => ToastState)) => void;
  subscribe: (listener: (state: ToastState) => void) => () => void;
};

const toastStore: ToastStore = {
  state: {
    toasts: [],
  },
  listeners: [],
  
  getState: () => toastStore.state,
  
  setState: (update) => {
    const nextState = typeof update === 'function' ? update(toastStore.state) : update;
    toastStore.state = { ...toastStore.state, ...nextState };
    toastStore.listeners.forEach((listener) => listener(toastStore.state));
  },
  
  subscribe: (listener) => {
    toastStore.listeners.push(listener);
    return () => {
      toastStore.listeners = toastStore.listeners.filter((l) => l !== listener);
    };
  },
};

type Toast = Omit<ToasterToast, 'id'>;

function toast({ ...props }: Toast) {
  const id = generateId();

  const update = (props: Partial<ToasterToast>) =>
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.map((t) =>
        t.id === id ? { ...t, ...props } : t
      ),
    }));

  const dismiss = () => {
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  };

  toastStore.setState((state) => ({
    ...state,
    toasts: [{ ...props, id }, ...state.toasts].slice(0, TOAST_LIMIT),
  }));

  return {
    id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<ToastState>(toastStore.state);

  React.useEffect(() => {
    return toastStore.subscribe(setState);
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) {
        toastStore.setState((state) => ({
          ...state,
          toasts: state.toasts.filter((t) => t.id !== toastId),
        }));
      } else {
        toastStore.setState((state) => ({
          ...state,
          toasts: [],
        }));
      }
    },
  };
}

export { useToast, toast };
