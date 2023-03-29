import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import queryString from "query-string";
import { getProducts, Product } from "@/api/products";
import { Pagination, ProductsListItem } from "@/components";
import { usePaginationSsr } from "@/shared/hooks";
import { APP_ROUTES, DEFAULT_TAKE } from "@/shared/constants";

type Params = {
  page: string;
};

const ProductsPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { pagination } = usePaginationSsr();

  return (
    <>
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(({ image, price, rating, title, id }) => (
          <li key={id}>
            <Link
              href={{ pathname: APP_ROUTES.productsDetail, query: { id: id } }}
            >
              <ProductsListItem data={{ image, price, rating, title }} />
            </Link>
          </li>
        ))}
      </ul>
      <Pagination pagination={pagination} />
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
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  { products: Product[] },
  Params
> = async ({ params }) => {
  if (!params?.page) {
    return {
      notFound: true,
    };
  }

  const page = params?.page;
  const offset = (+page - 1) * DEFAULT_TAKE;

  const products = await getProducts(
    queryString.stringify({ take: DEFAULT_TAKE, offset }),
  );

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

export default ProductsPage;
