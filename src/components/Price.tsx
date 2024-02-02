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
    <span {...props} className={twMerge("inline-block", className)}>
      ${children}
    </span>
  );
};
