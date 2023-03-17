import { ProductsApiResponse } from "@/pages/products";

export const Product = ({ image, price, rating, title }: ProductsApiResponse) => {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col p-4 gap-6">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="min-w-full aspect-square bg-center bg-contain bg-no-repeat"
      ></div>
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-xl">{title}</h2>
        <div className="flex justify-between">
          <span>
            {rating.rate}({rating.count})
          </span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};
