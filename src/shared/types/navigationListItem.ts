import { Url } from "next/dist/shared/lib/router/router";

export type NavigationListItem = {
  href: Url;
  basePathname: string;
  title: "Home" | "Products";
  exact?: boolean;
};
