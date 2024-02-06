import { z } from "zod";

export const CartItemDataSchema = z.object({
  id: z.string(),
  price: z.number(),
  title: z.string(),
  image: z.string(),
});

export const CartItemSchema = z.object({
  quantity: z.number(),
  data: CartItemDataSchema,
});
