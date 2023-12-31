import { ReactNode } from "react";

import { latoFont } from "@/styles/fonts";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${latoFont.variable} font-sans 
      flex flex-col min-h-screen
      bg-gradient-to-b from-gray-100 to-white
      text-slate-800
      `}
    >
      <Header />
      <main className="flex-grow xl:max-w-6xl xl:mx-auto p-12">{children}</main>
      <Footer />
    </div>
  );
};
