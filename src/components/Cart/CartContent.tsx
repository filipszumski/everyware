import { TrashIcon } from "@heroicons/react/24/outline";

import { useCartContext } from "@/context/cartContext/CartContext";

import { Button } from "../Button";
import { CartItem } from "./CartItem";

export const CartContent = () => {
  const { cartItems, clearCart } = useCartContext();

  return (
    <div className="md:col-span-2 grid grid-cols-1 gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg">
          Cart <span className="text-textSecondary">({cartItems.length})</span>
        </h2>
        <div>
          <Button icon={TrashIcon} variant="text" onClick={() => clearCart()}>
            Clear cart
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-6 justify-items-center">
        {cartItems.map((cartItemData) => (
          <CartItem key={cartItemData.data.id} item={cartItemData} />
        ))}
      </ul>
    </div>
  );
};
