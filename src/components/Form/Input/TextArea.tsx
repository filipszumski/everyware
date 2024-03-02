import { forwardRef, TextareaHTMLAttributes, useId } from "react";

import { twMerge } from "@/shared/utilities/twMerge";

import { FloatingLabel } from "./FloatingLabel";

type TextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "placeholder"
> & {
  label?: string;
  error?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    { label, error, required, className, name, ...props },
    ref,
  ) {
    const id = useId();

    return (
      <div className={twMerge("inline-block w-full")}>
        <div className="relative w-full">
          <textarea
            ref={ref}
            id={id}
            name={name}
            placeholder=""
            rows={5}
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
