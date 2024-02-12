import { ReactNode } from "react";

import { latoFont } from "@/styles/fonts";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${latoFont.variable} font-sans 
      flex flex-col min-h-screen text-textDefault bg-background
      `}
    >
      <Header />
      <main className="flex-grow xl:max-w-6xl xl:mx-auto w-full p-4 sm:p-8 lg:p-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};
