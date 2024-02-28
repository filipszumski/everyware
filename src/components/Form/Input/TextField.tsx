import { forwardRef, InputHTMLAttributes, useId } from "react";

import { twMerge } from "@/shared/utilities/twMerge";

import { FloatingLabel } from "./FloatingLabel";

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "placeholder"
> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, error, required, fullWidth, className, name, ...props },
    ref,
  ) {
    const id = useId();

    return (
      <div
        className={twMerge("inline-block max-w-52", {
          "max-w-full w-full": !!fullWidth,
        })}
      >
        <div className="relative w-full">
          <input
            ref={ref}
            id={id}
            name={name}
            placeholder=""
            {...props}
            className={twMerge(
              `
              peer p-2 rounded-md border-solid border-borderDefault placeholder-transparent w-full
              disabled:text-disabled
              focus:border-primary focus:ring-primary
            `,
              className,
              {
                "border-error focus:ring-error focus:border-error": !!error,
              },
            )}
          />

          {label && (
            <FloatingLabel required={required} error={error}>
              {label}
            </FloatingLabel>
          )}
        </div>
        <span
          role="alert"
          className={twMerge("text-xs text-error", {
            invisible: !error,
          })}
        >
          {error}
        </span>
      </div>
    );
  },
);
