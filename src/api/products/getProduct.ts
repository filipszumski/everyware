import axios from "../apiClient";
import { Product } from "./types";

export const getProduct = async (id: string) => {
  const response = await axios.get<Product>(`/products/${id}`);

  return response.data;
};
