import { usePaginationCsrQuery } from "@/api/products-csr/usePaginationCrsQuery";
import { Pagination } from "@/components/Pagination";
import { usePaginationCsr } from "@/shared/hooks/usePaginationCsr";

const PaginationCSR = () => {
  const { pagination } = usePaginationCsr();
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
      <Pagination pagination={pagination} />
    </>
  );
};

export default PaginationCSR;
