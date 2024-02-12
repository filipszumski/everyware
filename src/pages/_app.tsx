import "@/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Layout } from "@/components";
import { CartContextProvider } from "@/context/cartContext/CartContext";
import { apolloClient } from "@/graphql/apolloClient";

import SEO from "../../next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CartContextProvider>
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </ApolloProvider>
  );
}
