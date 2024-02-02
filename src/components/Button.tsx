import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

import { ButtonIcon, ButtonIconProps } from "@/shared/types/buttonIcon";
import { twMerge } from "@/shared/utilities/twMerge";

const buttonVariants = cva(
  "flex gap-2 items-center justify-center px-4 py-2 rounded-md",
  {
    variants: {
      variant: {
        contained: `
          text-onPrimary bg-primary
          hover:bg-primaryActive
          disabled:bg-disabled
        `,
        outlined: `
          bg-neutralBackground text-primary border-solid border-2 border-primary
          hover:bg-primaryBackground
          disabled:hover:bg-neutralBackground disabled:text-disabled disabled:border-disabled
        `,
        text: `
          text-primary
          hover:bg-primaryBackground
        `,
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "contained",
      fullWidth: false,
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icon?: ButtonIcon;
    iconProps?: ButtonIconProps;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      icon: Icon,
      className,
      fullWidth,
      iconProps = {},
      variant,
      ...props
    },
    ref,
  ) {
    const { className: iconClassName, ...restIconProps } = iconProps;

    return (
      <button
        ref={ref}
        {...props}
        className={twMerge(buttonVariants({ variant, fullWidth, className }), {
          "p-2 rounded-full": Icon && !children,
        })}
      >
        {Icon && (
          <Icon
            className={twMerge("h-5 w-5", iconClassName)}
            {...restIconProps}
          />
        )}
        {children}
      </button>
    );
  },
);
