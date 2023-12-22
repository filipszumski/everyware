import { ComponentProps, PropsWithChildren } from "react";

type ButtonProps = ComponentProps<"button">;

export const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg"
      {...props}
    >
      {children}
    </button>
  );
};
