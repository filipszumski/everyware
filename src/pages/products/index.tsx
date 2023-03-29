import { APP_ROUTES, NAVIGATION_LIST } from "@/shared/constants";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Products = () => {
  const router = useRouter();
  const productsPageUrl = NAVIGATION_LIST.find(
    (item) => item.pathname === APP_ROUTES.products,
  )?.href;

  useEffect(() => {
    if (!productsPageUrl) return;

    router.replace(productsPageUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default Products;
