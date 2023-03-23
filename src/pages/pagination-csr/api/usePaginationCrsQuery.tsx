import axios from "axios";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useQuery } from "react-query";
import { usePagination } from "../../../shared/hooks/usePagination";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
  image: string;
  longDescription: string;
}

export interface Rating {
  rate: number;
  count: number;
}

const getProducts = async (searchParams: string) => {
  const products = await axios.get<Product[]>(`https://naszsklep-api.vercel.app/api/products?${searchParams}`);

  return products;
};

export const usePaginationCsrQuery = () => {
  const router = useRouter();
  const searchParams = router.query;

  const offset = searchParams.offset;
  const take = searchParams.take;

  const productsQuery = useQuery(
    ["products-csr", searchParams],
    () => {
      const stringifiedSearchParams = queryString.stringify(router.query);
      return getProducts(stringifiedSearchParams);
    },
    {
      enabled: !!offset && !!take,
    }
  );

  return {
    productsQuery,
  };
};
