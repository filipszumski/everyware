import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Layout } from "@/components";
import { CartContextProvider } from "@/context/cartContext/CartContext";

import SEO from "../../next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}
