import { DefaultSeoProps } from "next-seo";

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
    siteName: title,
  },
};

export default nextSeoConfig;
