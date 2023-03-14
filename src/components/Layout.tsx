import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow  p-8 sm:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
};
