import axios from "axios";
import { ProductsApiResponse } from "./types";

export const getProduct = async (id: string) => {
  const response = await axios.get<ProductsApiResponse | null>(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};
