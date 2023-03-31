import { Product } from "@/api/products";
import { NextSeo } from "next-seo";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

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
        canonical={`https://online-shop-gamma-three.vercel.app/products/details/${id}`}
        openGraph={{
          url: `https://online-shop-gamma-three.vercel.app/products/details/${id}`,
          title: title,
          description: description,
          images: [
            {
              url: image,
              alt: title,
              type: "image/jpeg",
            },
          ],
          siteName: "Online shop",
        }}
      />
      <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
        <div className="relative aspect-video md:aspect-square">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
        <div className="flex flex-col justify-start gap-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <article className="prose">
            <ReactMarkdown>{longDescription}</ReactMarkdown>
          </article>
          <div>Category: {category}</div>
          <div className="flex justify-between">
            <span>
              {rating.rate}({rating.count})
            </span>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </>
  );
};
