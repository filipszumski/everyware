import axios from "axios";

import { Product } from "./types";

export const getProduct = async (id: string) => {
  const response = await axios.get<Product>(
    `https://naszsklep-api.vercel.app/api/products/${id}`,
  );

  return response.data;
};
