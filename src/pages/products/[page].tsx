import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

import { Pagination, ProductsListItem } from "@/components";
import { apolloClient } from "@/graphql/apolloClient";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/graphql/generated/graphql";
import { DEFAULT_TAKE } from "@/shared/constants";

type Params = {
  page: string;
};

type ProductsPageProps = {
  products: GetProductsQuery["productsConnection"]["edges"];
  count: number;
};

const ProductsPage = ({
  products,
  count,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.node.slug}>
            <ProductsListItem data={product} />
          </li>
        ))}
      </ul>
      <Pagination itemsCount={count} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return {
    paths: pages.map((page) => ({
      params: {
        page: page.toString(),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  ProductsPageProps,
  Params
> = async ({ params }) => {
  const page = params?.page;

  if (!page) {
    return {
      notFound: true,
    };
  }

  const skip = (+page - 1) * DEFAULT_TAKE;

  const {
    data: {
      productsConnection: {
        aggregate: { count },
        edges,
      },
    },
  } = await apolloClient.query<GetProductsQuery, GetProductsQueryVariables>({
    variables: {
      first: DEFAULT_TAKE,
      skip,
    },
    query: GetProductsDocument,
  });

  if (!edges) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: edges,
      count: count,
    },
  };
};

export default ProductsPage;
