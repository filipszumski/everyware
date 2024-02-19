import { cva } from "class-variance-authority";

import { twMerge } from "@/shared/utilities/twMerge";

import { SpinnerProps } from "./types";

export const spinnerVariants = cva(
  "inline-block border-t-primary rounded-full animate-spin",
  {
    variants: {
      size: {
        small: "h-6 w-6 border-2",
        medium: "h-10 w-10 border-4",
        large: "h-16 w-16 border-8",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export const Spinner = ({ className, size }: SpinnerProps) => {
  return <div className={twMerge(spinnerVariants({ size, className }))}></div>;
};
