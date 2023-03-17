import { Product } from "@/components/Product";
import { InferGetStaticPropsType } from "next";

export type ProductsApiResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
};

type Category = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

type Rating = {
  rate: number;
  count: number;
};

const ProductsPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Product {...product} key={product.id}></Product>
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
