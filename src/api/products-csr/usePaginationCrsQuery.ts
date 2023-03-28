import { useRouter } from "next/router";
import queryString from "query-string";
import { useQuery } from "react-query";
import { getProducts } from "./getProducts";

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
    },
  );

  return {
    productsQuery,
  };
};
