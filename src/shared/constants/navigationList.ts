import { NavigationListItem } from "../types";
import { APP_ROUTES } from "./appRoutes";

type NavigationList = NavigationListItem[];

export const NAVIGATION_LIST: NavigationList = [
  {
    href: APP_ROUTES.home,
    title: "Home",
  },
  {
    href: {
      pathname: APP_ROUTES.products,
      query: { page: "1" },
    },
    title: "Products",
  },
];
