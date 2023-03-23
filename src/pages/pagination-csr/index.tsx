import { Pagination } from "@/components/Pagination";

import { usePaginationCsrQuery } from "./api/usePaginationCrsQuery";

const PaginationCSR = () => {
  const { productsQuery } = usePaginationCsrQuery();

  if (productsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {productsQuery.data?.data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <Pagination />
    </>
  );
};

export default PaginationCSR;
