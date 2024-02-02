import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

import {
  CartItem as CartItemType,
  useCartContext,
} from "@/context/cartContext/CartContext";
import { useDelayedFunction } from "@/shared/hooks/useDelayedFunction";

import { Button } from "./Button";
import { Price } from "./Price";

type CartItemProps = {
  item: CartItemType;
};

const ANIMATION_DURATION = 200;

export const CartItem = ({
  item: {
    data: { id, image, price, title },
    quantity,
  },
}: CartItemProps) => {
  const { removeItemFromCart } = useCartContext();
  const [removingItemId, setRemovingItemId] = useState<string | null>(null);

  const [delayedRemoveItemFromCart] = useDelayedFunction(
    (id: string) => {
      removeItemFromCart(id);
      setRemovingItemId(null);
    },
    [removeItemFromCart],
    ANIMATION_DURATION,
  );

  return (
    <li
      key={id}
      style={{
        ...(removingItemId === id
          ? {
              transitionDuration: `${ANIMATION_DURATION.toString()}ms`,
              transitionProperty: "all",
              transitionTimingFunction: "ease-in-out",
              transform: "translateX(-100%)",
              opacity: 0,
            }
          : {
              opacity: 1,
              transform: "translateX(0%)",
            }),
      }}
      className={`
          p-4 border-solid border-2 border-defaultBorder rounded-md bg-white shadow-md w-full
          flex items-center gap-4
          `}
    >
      <div className="relative aspect-square w-20">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="120px"
        />
      </div>
      <div className="flex-1 grid items-center gap-2 grid-cols-cartItemsSmall sm:grid-cols-cartItems">
        <div>{title}</div>
        <Price className="justify-self-end order-4 sm:order-2">{price}</Price>
        <p className="order-3">qty. {quantity}</p>
        <Button
          className="justify-self-end order-2 sm:order-4"
          onClick={() => {
            if (removingItemId !== null) {
              delayedRemoveItemFromCart.cancel();
            }
            setRemovingItemId(id);
            delayedRemoveItemFromCart(id);
          }}
          variant="text"
          icon={TrashIcon}
        />
      </div>
    </li>
  );
};
