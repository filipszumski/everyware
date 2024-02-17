import { Tab, TabListProps } from "@headlessui/react";
import { forwardRef } from "react";

import { twMerge } from "@/shared/utilities/twMerge";

export const TabList = forwardRef<HTMLDivElement, TabListProps<"div">>(
  function TabList({ children, className, ...props }, ref) {
    return (
      <Tab.List
        className={twMerge(
          "flex gap-2 p-2 bg-background rounded-lg",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </Tab.List>
    );
  },
);
