import { PropsWithChildren } from "react";

export const RowContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  );
};
