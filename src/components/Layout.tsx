import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-100">
      <Header />
      <main className="flex-grow xl:max-w-6xl xl:mx-auto p-12">{children}</main>
      <Footer />
    </div>
  );
};
