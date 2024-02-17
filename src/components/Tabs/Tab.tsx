import { Tab, TabProps } from "@headlessui/react";
import { forwardRef } from "react";

import { twMerge } from "@/shared/utilities/twMerge";

export const TabListElement = forwardRef<HTMLButtonElement, TabProps<"button">>(
  function TabListElement({ children, className, ...props }, ref) {
    return (
      <Tab
        {...props}
        className={twMerge(
          `px-4 py-2 rounded-lg ring-primary ring-offset-1 ring-offset-background border-background border-2
          focus:outline-none focus:ring-2
          ui-selected:bg-backgroundLight ui-selected:border-2 ui-selected:border-borderDefault`,
          className,
        )}
        ref={ref}
      >
        {children}
      </Tab>
    );
  },
);
