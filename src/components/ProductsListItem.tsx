import { ProductsApiResponse } from "@/api/products/types";

type ProductListItem = Pick<ProductsApiResponse, "image" | "price" | "title" | "rating">;

type ProductsListItemProps = {
  data: ProductListItem;
};

export const ProductsListItem = ({ data: { image, price, title, rating } }: ProductsListItemProps) => {
  return (
    <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 p-4 gap-4 transition-transform ease-in-out duration-150 hover:scale-105">
      <div className="min-w-full aspect-square">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <h2 className="text-xl">{title}</h2>
      <div className="flex justify-between">
        <span>
          {rating.rate}({rating.count})
        </span>
        <span>${price}</span>
      </div>
    </div>
  );
};