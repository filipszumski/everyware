import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { serialize } from "next-mdx-remote/serialize";

import { Button, ProductDetails } from "@/components";
import { apolloClient } from "@/graphql/apolloClient";
import {
  GetProductDocument,
  GetProductQuery,
  GetProductQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
  GetProductsSlugsQueryVariables,
} from "@/graphql/generated/graphql";
import { ProductWithMarkdown } from "@/graphql/products/types";
import { DEFAULT_TAKE } from "@/shared/constants";

type Param = {
  slug: string;
};

type ProductDetailsPageProps = {
  product: ProductWithMarkdown;
};

const ProductDetailsPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-6">
        <Button
          variant="text"
          className="text-textDefault hover:bg-backgroundContrast"
          onClick={() => router.back()}
          icon={ChevronLeftIcon}
        />
      </div>
      <ProductDetails data={product} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Param> = async () => {
  const {
    data: { products },
  } = await apolloClient.query<
    GetProductsSlugsQuery,
    GetProductsSlugsQueryVariables
  >({
    query: GetProductsSlugsDocument,
    variables: {
      first: DEFAULT_TAKE,
    },
  });

  return {
    paths: products.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  ProductDetailsPageProps,
  Param
> = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const {
    data: { product },
  } = await apolloClient.query<GetProductQuery, GetProductQueryVariables>({
    variables: {
      slug: params.slug,
    },
    query: GetProductDocument,
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: {
        ...product,
        longDescription: await serialize(product.description),
      },
    },
    revalidate: 60,
  };
};

export default ProductDetailsPage;
