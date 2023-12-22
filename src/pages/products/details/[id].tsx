import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import queryString from "query-string";

import { getProduct, getProducts, Product } from "@/api/products";
import { Button, ProductDetails } from "@/components";
import { DEFAULT_TAKE } from "@/shared/constants";

type Param = {
  id: string;
};

const ProductDetailsPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-6">
        <Button onClick={() => router.back()}>Back</Button>
      </div>
      <ProductDetails data={product} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Param> = async () => {
  const products = await getProducts(
    queryString.stringify({ take: DEFAULT_TAKE }),
  );

  return {
    paths: products.map((product) => ({
      params: {
        id: product.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  { product: Product },
  Param
> = async ({ params }) => {
  if (!params?.id) {
    return {
      notFound: true,
    };
  }

  const product = await getProduct(params.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60,
  };
};

export default ProductDetailsPage;
