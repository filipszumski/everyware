import { getProduct, getProducts, Product } from "@/api/products";
import { Button, ProductDetails } from "@/components";
import { APP_ROUTES, DEFAULT_TAKE } from "@/shared/constants";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import queryString from "query-string";

type Param = {
  id: string;
};

const ProductDetaulsPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) return <div>Dupa</div>;

  return (
    <div>
      <div className="mb-6">
        <Link href={{ pathname: APP_ROUTES.products, query: { page: 1 } }}>
          <Button>Back</Button>
        </Link>
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
    fallback: true,
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
  };
};

export default ProductDetaulsPage;
