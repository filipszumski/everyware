import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { Product } from "@/api/products";
import { useCartContext } from "@/context/cartContext/CartContext";
import { APP_ROUTES } from "@/shared/constants";

import { Button } from "./Button";
import { Price } from "./Price";

type ProductListItem = Pick<
  Product,
  "image" | "price" | "title" | "rating" | "id"
>;

type ProductsListItemProps = {
  data: ProductListItem;
};

export const ProductsListItem = ({
  data: { image, price, title, rating, id },
}: ProductsListItemProps) => {
  const { addItemToCart } = useCartContext();

  return (
    <div className="bg-white rounded-xl shadow-md grid grid-cols-1 p-4 gap-4 transition-transform ease-in-out duration-150 hover:scale-105">
      <Link
        className="grid grid-cols-1 gap-4"
        href={{ pathname: APP_ROUTES.productDetails, query: { id } }}
      >
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <h2 className="text-xl">{title}</h2>
        <div className="flex justify-between">
          <span>
            {rating.rate}({rating.count})
          </span>
          <Price>{price}</Price>
        </div>
      </Link>
      <div>
        <Button
          icon={ShoppingCartIcon}
          fullWidth
          variant="outlined"
          onClick={() =>
            addItemToCart({
              id: id,
              price: price,
              title: title,
              image: image,
            })
          }
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
