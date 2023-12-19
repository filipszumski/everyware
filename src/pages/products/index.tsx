import { useRouter } from "next/router";
import { useEffect } from "react";

import { APP_ROUTES, NAVIGATION_LIST } from "@/shared/constants";

const Products = () => {
  const router = useRouter();

  useEffect(() => {
    const productsPageUrl = NAVIGATION_LIST.find((navListItem) => {
      if (typeof navListItem.href === "string") return;

      if (navListItem.href.pathname === APP_ROUTES.products) {
        return true;
      }
    });

    if (productsPageUrl?.href) {
      router.replace(productsPageUrl?.href);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default Products;
