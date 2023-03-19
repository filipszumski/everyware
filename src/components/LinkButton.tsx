import { forwardRef, ReactNode } from "react";

type Props = {
  isActive?: boolean;
  children: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const NavLinkButton = forwardRef<HTMLAnchorElement, Props>(function LinkButton(
  { isActive, children, ...props },
  ref
) {
  return (
    <a
      ref={ref}
      {...props}
      className={`
        ${isActive && "bg-cyan-800"}
        p-2 rounded-lg hover:bg-cyan-600 w-full
  `}
    >
      {children}
    </a>
  );
});
