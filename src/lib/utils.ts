import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
 
/**
 * Combines multiple class names using clsx and merges them with tailwind-merge
 * to avoid style conflicts.
 * @param inputs - Array of class values to be combined
 * @returns A single string of combined and merged class names
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
