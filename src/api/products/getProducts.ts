import axios from "axios";
import { ProductsApiResponse } from "./types";

export const getProducts = async () => {
  const response = await axios.get<ProductsApiResponse[]>("https://fakestoreapi.com/products");
  return response.data;
};
