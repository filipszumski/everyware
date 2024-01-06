import Image from "next/image";
import { NextSeo, ProductJsonLd } from "next-seo";
import ReactMarkdown from "react-markdown";

import { Product } from "@/api/products";
import { APP_ROUTES } from "@/shared/constants";
import { SEO_DEFAULTS } from "@/shared/constants/seoDefaults";

type ProductDetailsProps = {
  data: Product;
};

export const ProductDetails = ({
  data: {
    category,
    description,
    image,
    price,
    rating,
    title,
    longDescription,
    id,
  },
}: ProductDetailsProps) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${process.env.NEXT_PUBLIC_APP_URL}${APP_ROUTES.productsDetails}/${id}`}
        openGraph={{
          type: "product",
          title: title,
          description: description,
          url: `${process.env.NEXT_PUBLIC_APP_URL}${APP_ROUTES.productsDetails}/${id}`,
          images: [
            {
              url: image,
              alt: title,
              type: "image/jpeg",
            },
          ],
          siteName: SEO_DEFAULTS.siteName,
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <ProductJsonLd
        productName={title}
        images={[image]}
        description={description}
        aggregateRating={{
          ratingValue: rating.rate,
          reviewCount: rating.count,
        }}
        offers={[
          {
            price: { price },
            priceCurrency: "USD",
          },
        ]}
      />
      <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
        <div className="relative aspect-video md:aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-start gap-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div>Category: {category}</div>
          <div>
            Rating:{" "}
            <span>
              {rating.rate}({rating.count})
            </span>
          </div>
          <article className="prose prose-slate">
            <ReactMarkdown>{longDescription}</ReactMarkdown>
          </article>
          <div className="flex justify-end w-full">
            <span>${price}</span>
          </div>
        </div>
      </div>
    </>
  );
};
