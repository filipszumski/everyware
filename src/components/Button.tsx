import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="p-2 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg shadow-lg">
      {children}
    </button>
  );
};
