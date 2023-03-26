import { SearchParams } from "@/shared/types/searchParams";
import axios from "axios";
import { Product } from "./types";

export const getProducts = async ({
  path,
  params,
}: {
  path: string;
  params: SearchParams;
}) => {
  const products = await axios.get<Product[]>(
    `${path}?take=${params.take}&offset=${params.offset}`,
  );

  return products.data;
};
