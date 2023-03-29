import { usePaginationCsrQuery } from "@/api/products-csr";
import { Pagination } from "@/components";
import { usePaginationCsr } from "@/shared/hooks";

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
