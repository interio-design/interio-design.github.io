// Type declarations for components

// UI Components
declare module '@/components/ui/button' {
  import { ButtonHTMLAttributes, ReactNode } from 'react';
  
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
    children?: ReactNode;
  }
  
  export const Button: React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  >;
}

declare module '@/components/ui/input' {
  import { InputHTMLAttributes } from 'react';
  
  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
  
  export const Input: React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  >;
}

declare module '@/components/ui/textarea' {
  import { TextareaHTMLAttributes } from 'react';
  
  interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
  
  export const Textarea: React.ForwardRefExoticComponent<
    TextareaProps & React.RefAttributes<HTMLTextAreaElement>
  >;
}

declare module '@/components/ui/card' {
  import { HTMLAttributes, ReactNode } from 'react';
  
  interface CardProps extends HTMLAttributes<HTMLDivElement> {}
  interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
  interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
  interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
  
  export const Card: React.ForwardRefExoticComponent<
    CardProps & React.RefAttributes<HTMLDivElement>
  >;
  export const CardHeader: React.FC<CardHeaderProps>;
  export const CardTitle: React.FC<CardTitleProps>;
  export const CardContent: React.FC<CardContentProps>;
}

declare module '@/components/ui/use-toast' {
  import { ReactNode } from 'react';
  
  interface ToastAction {
    label: string;
    onClick: () => void;
  }
  
  interface ToastOptions {
    title: string;
    description?: string;
    variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
    action?: ToastAction;
    duration?: number;
  }
  
  interface ToastReturn {
    id: string;
    dismiss: () => void;
    update: (props: ToastOptions) => void;
  }
  
  interface ToastContextType {
    toast: (props: ToastOptions) => ToastReturn;
    dismiss: (toastId?: string) => void;
    toasts: ToastReturn[];
  }
  
  export const useToast: () => ToastContextType;
  export const Toaster: () => JSX.Element;
}

// Layout Components
declare module '@/components/Header' {
  const Header: () => JSX.Element;
  export default Header;
}

declare module '@/components/Hero' {
  const Hero: () => JSX.Element;
  export default Hero;
}

declare module '@/components/About' {
  const About: () => JSX.Element;
  export default About;
}

declare module '@/components/Testimonials' {
  const Testimonials: () => JSX.Element;
  export default Testimonials;
}

declare module '@/components/Contact' {
  const Contact: () => JSX.Element;
  export default Contact;
}

declare module '@/components/Footer' {
  const Footer: () => JSX.Element;
  export default Footer;
}
