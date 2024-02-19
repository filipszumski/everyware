import { forwardRef, InputHTMLAttributes } from "react";

import { twMerge } from "@/shared/utilities/twMerge";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "placeholder"> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, required, fullWidth, className, name, ...props },
  ref,
) {
  return (
    <div
      className={twMerge("inline-block max-w-52", {
        "max-w-full w-full": !!fullWidth,
      })}
    >
      <div className="grid grid-cols-1 relative">
        <input
          ref={ref}
          id={name}
          name={name}
          placeholder=""
          {...props}
          className={twMerge(
            `
              peer p-2 rounded-md border-solid border-borderDefault placeholder-transparent
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
          <label
            htmlFor={name}
            className={twMerge(
              `
                  left-[0.25rem] top-0 -translate-y-1/2 px-1 text-xs bg-backgroundLight text-textSecondary absolute transition-all
                  disabled:text-disabled
                  peer-placeholder-shown:left-1 peer-placeholder-shown:text-base -peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/2
                  peer-focus:left-2 peer-focus:text-xs peer-focus:top-0 peer-focus:-translate-y-1/2
                  `,
              {
                "text-error": !!error,
              },
            )}
          >
            {label}
            {required && "*"}
          </label>
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
});
