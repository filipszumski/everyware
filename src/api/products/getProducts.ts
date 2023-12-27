import axios from "../apiClient";
import { Product } from "./types";

export const getProducts = async (params: string) => {
  const products = await axios.get<Product[]>(`/products?${params}`);

  return products.data;
};
