import { DefaultSeoProps } from "next-seo";

import logo from "./public/everyware-logo-og.svg";

const title = "Everyware - Online Shop";
const description =
  "Find everything you need in one click! Our online shop offers a wide variety of items, ensuring a hassle-free and enjoyable shopping experience. Dive into the world of endless choices today";

const nextSeoConfig: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
    url: process.env.APP_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}${logo.src}`,
        alt: "Everyware logo",
        type: "image/jpeg",
      },
    ],
    siteName: title,
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

export default nextSeoConfig;
