import { Product } from "@/api/products/types";
import Image from "next/image";

type ProductDetailsProps = {
  data: Product;
};

export const ProductDetails = ({
  data: { category, description, image, price, rating, title, longDescription },
}: ProductDetailsProps) => {
  return (
    <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
      <div className="relative aspect-video">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <div className="flex flex-col justify-start gap-4">
        <h2 className="text-2xl">{title}</h2>
        <div>{description}</div>
        <div>{longDescription}</div>
        <div>Category: {category}</div>
        <div className="flex justify-between">
          <span>
            {rating.rate}({rating.count})
          </span>
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
};
