import { ClassValue, clsx } from "clsx";
import { twMerge as originalTwMerge } from "tailwind-merge";

export const twMerge = (...args: ClassValue[]) => {
  return originalTwMerge(clsx(args));
};
