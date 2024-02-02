import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

import { Product } from "@/api/products";

type CartItemData = Pick<Product, "id" | "price" | "title" | "image">;

export type CartItem = {
  data: CartItemData;
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
  addItemToCart: (cartItem: CartItemData) => void;
  removeItemFromCart: (id: CartItemData["id"]) => void;
  clearCart: () => void;
  allCartItemsQuantity: number;
};

const CartContext = createContext<CartState | null>(null);

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartState["cartItems"]>([]);

  const allCartItemsQuantity = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0,
  );

  const addItemToCart = (cartItemData: CartItemData) => {
    setCartItems((prevState) => {
      const existingItem = prevState.find(
        (cartItem) => !!cartItem && cartItem.data.id === cartItemData.id,
      );

      if (!existingItem) {
        return [
          ...prevState,
          {
            data: cartItemData,
            quantity: 1,
          },
        ];
      }

      return prevState.map((cartItem) => {
        if (cartItem.data.id === existingItem.data.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }

        return cartItem;
      });
    });
  };

  const removeItemFromCart = (id: CartItemData["id"]) => {
    setCartItems((prev) => prev.filter((cartItem) => cartItem.data.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const value = useMemo(
    () => ({
      cartItems,
      addItemToCart,
      clearCart,
      removeItemFromCart,
      allCartItemsQuantity,
    }),
    [cartItems, allCartItemsQuantity],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("You forgot CartContextProvider!");
  }

  return cartContext;
};
