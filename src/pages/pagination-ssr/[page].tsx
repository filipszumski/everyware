import { getProducts } from "@/api/products.ssr/getProducts";
import { Product } from "@/api/products.ssr/types";
import { Pagination } from "@/components/Pagination";
import { usePaginationSsr } from "@/shared/hooks/usePaginationSsr";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

type Params = {
  page: string;
};

const DEFAULT_TAKE = 25;

const PaginationSSR = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();
  const { pagination } = usePaginationSsr();

  if (isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <Pagination pagination={pagination} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return {
    paths: pages.map((page) => ({
      params: {
        page: page.toString(),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ products: Product[] }, Params> = async ({ params }) => {
  if (!params?.page) {
    return {
      notFound: true,
    };
  }

  const path = "https://naszsklep-api.vercel.app/api/products";
  const page = params?.page;
  const offset = (+page - 1) * DEFAULT_TAKE;

  const products = await getProducts({ path, params: { take: DEFAULT_TAKE, offset } });

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: products,
    },
  };
};

export default PaginationSSR;
