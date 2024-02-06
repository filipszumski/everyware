import { InputHTMLAttributes } from "react";

import { twMerge } from "@/shared/utilities/twMerge";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "placeholder"> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
};

export const Input = ({
  label,
  error,
  required,
  fullWidth,
  className,
  ...props
}: InputProps) => {
  return (
    <div
      className={twMerge("inline-block max-w-52", {
        "max-w-full w-full": !!fullWidth,
      })}
    >
      <div className="grid grid-cols-1 relative">
        <input
          id="input"
          placeholder="Transparent"
          required={required}
          {...props}
          className={twMerge(
            `
              peer p-2 rounded-md  border-2 border-solid border-defaultBorder placeholder-transparent
              disabled:text-disabled
              focus:outline-2 focus:outline-primaryActive`,
            className,
            {
              "border-error focus:outline-error": !!error,
            },
          )}
        />
        {label && (
          <label
            htmlFor="input"
            className={twMerge(
              `
                  left-[0.25rem] -translate-y-[50%] px-2 text-xs bg-neutralBackground rounded-md text-textSecondary absolute transition-all
                  disabled:text-disabled
                  peer-placeholder-shown:left-0 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-placeholder-shown:translate-y-[0.6rem]
                  peer-focus:left-2 peer-focus:text-xs peer-focus:bg-neutralBackground peer-focus:-translate-y-[50%]
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
        <span
          className={twMerge("text-xs text-error", {
            hidden: !error,
          })}
        >
          {error}
        </span>
      </div>
    </div>
  );
};
