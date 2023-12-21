import { Url } from "next/dist/shared/lib/router/router";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<LinkProps>;

function isActiveNavLink(href: Url, pathname: string) {
  if (typeof href === "string") {
    return href === pathname;
  } else {
    return href.pathname === pathname;
  }
}

export const NavLink = ({ children, href, ...restProps }: Props) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={href}
      className={`
          ${
            isActiveNavLink(href, pathname)
              ? "font-bold bg-blue-200 text-blue-700"
              : "font-normal  text-blue-500 hover:bg-blue-100"
          }
        inline-block w-full py-2 px-2 rounded-md
        `}
      {...restProps}
    >
      {children}
    </Link>
  );
};
