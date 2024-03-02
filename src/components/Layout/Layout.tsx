import { ReactNode } from "react";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen text-textDefault bg-background">
      <Header />
      <main className="flex-grow xl:max-w-6xl xl:mx-auto w-full p-4 sm:p-8 lg:p-12 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};
