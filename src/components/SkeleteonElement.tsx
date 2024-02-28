import { HTMLAttributes } from "react";

import { twMerge } from "@/shared/utilities/twMerge";

type Props = HTMLAttributes<HTMLDivElement>;

export const SkeletonElement = ({ className, ...props }: Props) => {
  return (
    <div
      className={twMerge(
        "h-lineHeight w-6 bg-background animate-pulse",
        className,
      )}
      {...props}
    />
  );
};
