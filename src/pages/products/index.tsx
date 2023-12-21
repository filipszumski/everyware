import { useRouter } from "next/router";
import { useEffect } from "react";

import { APP_ROUTES, NAVIGATION_LIST } from "@/shared/constants";

const Products = () => {
  const router = useRouter();

  useEffect(() => {
    const productsPageUrl = NAVIGATION_LIST.find(
      (navListItem) => navListItem.basePathname === APP_ROUTES.products,
    );

    if (productsPageUrl) {
      router.replace(productsPageUrl?.href, undefined, { shallow: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default Products;
