import { NavigationListItem } from "../types";
import { APP_ROUTES } from "./appRoutes";

type NavigationList = NavigationListItem[];

export const NAVIGATION_LIST: NavigationList = [
  {
    href: APP_ROUTES.home,
    basePathname: APP_ROUTES.home,
    exact: true,
    title: "Home",
  },
  {
    href: {
      pathname: APP_ROUTES.productsPage,
      query: { page: "1" },
    },
    basePathname: APP_ROUTES.products,
    title: "Products",
  },
];
