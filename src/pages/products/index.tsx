import { getProducts } from "@/api/products/getProducts";
import { ProductsListItem } from "@/components/ProductsListItem";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

const ProductsPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(({ title, rating, price, image, id }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>
              <ProductsListItem data={{ image, price, rating, title }} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
