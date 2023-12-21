import { Url } from "next/dist/shared/lib/router/router";

export type NavigationListItem = {
  href: Url;
  title: string;
};
