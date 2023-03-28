import { Url } from "next/dist/shared/lib/router/router";
import { APP_ROUTES } from "./appRoutes";

type NavigationListItem = {
  pathname: string;
  href: Url;
  title: string;
};

type NavigantionList = NavigationListItem[];

export const NAVIGATION_LIST: NavigantionList = [
  {
    pathname: APP_ROUTES.home,
    href: APP_ROUTES.home,
    title: "Home",
  },
  {
    pathname: APP_ROUTES.products,
    href: {
      pathname: APP_ROUTES.products,
      query: { page: 1 },
    },
    title: "Products",
  },
  {
    pathname: APP_ROUTES.productsCsr,
    href: APP_ROUTES.productsCsr,
    title: "Products CSR",
  },
];
