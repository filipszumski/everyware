import { ProductsApiResponse } from "@/shared/types/productsResponse";

type ProductDetailsProps = {
  data: ProductsApiResponse;
};

export const ProductDetails = ({
  data: { category, description, image, price, rating, title },
}: ProductDetailsProps) => {
  return (
    <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
      <div className="min-w-full aspect-square">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col justify-start gap-4">
        <h2 className="text-2xl">{title}</h2>
        <div>{description}</div>
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
