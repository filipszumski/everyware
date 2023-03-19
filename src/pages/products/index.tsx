import { ProductsListItem } from "@/components/ProductsListItem";
import { ProductsApiResponse } from "@/shared/types/productsResponse";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

const ProductsPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
  const response = await fetch("https://fakestoreapi.com/products");
  const products: ProductsApiResponse[] = await response.json();

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
