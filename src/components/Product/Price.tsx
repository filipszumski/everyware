import { HTMLAttributes } from "react";

import { twMerge } from "@/shared/utilities/twMerge";

export const Price = ({
  children,
  className,
  ...props
}: Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  children: string | number;
}) => {
  return (
    <span
      className={twMerge(
        "inline-block text-lg font-bold text-primary",
        className,
      )}
      {...props}
    >
      ${children}
    </span>
  );
};
