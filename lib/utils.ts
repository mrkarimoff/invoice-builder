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

export function decimalToTimeString(decimalTime: number): string {
  const hours = Math.floor(decimalTime);
  const minutes = Math.round((decimalTime - hours) * 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const timeString = `${hours}:${formattedMinutes}`;
  return timeString;
}
