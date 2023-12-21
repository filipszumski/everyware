import axios from "axios";

import { Product } from "./types";

export const getProducts = async (params: string) => {
  const products = await axios.get<Product[]>(
    `https://naszsklep-api.vercel.app/api/products?${params}`,
  );

  return products.data;
};
