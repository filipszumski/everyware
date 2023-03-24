import axios from "axios";
import { Product } from "./types";

export const getProducts = async (searchParams: string) => {
  const products = await axios.get<Product[]>(`https://naszsklep-api.vercel.app/api/products?${searchParams}`);

  return products;
};
