import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-100">
      <Header />
      <main className="flex-grow xl:max-w-6xl p-12 mx-auto">{children}</main>
      <Footer />
    </div>
  );
};
