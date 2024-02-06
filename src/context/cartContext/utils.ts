import { CartItemSchema } from "./schemas";
import { CartItem } from "./types";

export const isCartItems = (element: unknown): element is CartItem[] => {
  return (
    Array.isArray(element) &&
    element.every((item) => {
      const { success } = CartItemSchema.safeParse(item);

      return success;
    })
  );
};
