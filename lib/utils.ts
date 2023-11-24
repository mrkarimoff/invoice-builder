import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isOdd = (index: number): boolean => (index + 1) % 2 === 1;

export function timeStringToDecimal(timeString: string) {
  const [hours, minutes] = timeString.split(':').map(Number);
  const decimalTime = hours + minutes / 60;
  return decimalTime;
}
