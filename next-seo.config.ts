import { DefaultSeoProps } from "next-seo";

import { SEO_DEFAULTS } from "@/shared/constants/seoDefaults";

import logo from "./public/everyware-logo-og.png";

const nextSeoConfig: DefaultSeoProps = {
  title: SEO_DEFAULTS.siteName,
  description: SEO_DEFAULTS.description,
  openGraph: {
    type: "website",
    title: SEO_DEFAULTS.siteName,
    description: SEO_DEFAULTS.description,
    url: process.env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}${logo.src}`,
        alt: "Everyware logo",
        type: "image/jpeg",
      },
    ],
    siteName: SEO_DEFAULTS.siteName,
  },
  twitter: {
    cardType: "summary_large_image",
  },
  facebook: {
    appId: "3012791805518561",
  },
};

export default nextSeoConfig;
