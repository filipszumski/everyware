import { Url } from "next/dist/shared/lib/router/router";

import { ButtonIcon } from "./buttonIcon";

export type NavigationListItem = {
  href: Url;
  basePathname: string;
  title: "Home" | "Products";
  exact?: boolean;
  icon: ButtonIcon;
};
