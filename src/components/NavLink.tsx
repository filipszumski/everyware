import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<
  LinkProps & {
    exact?: boolean;
    basePathname: string;
  }
>;

function isActiveNavLink(
  basePathname: string,
  currentPathname: string,
  exact?: boolean,
) {
  if (exact) {
    return currentPathname === basePathname;
  } else {
    return currentPathname.startsWith(basePathname);
  }
}

export const NavLink = ({
  children,
  exact,
  basePathname,
  ...restProps
}: Props) => {
  const { pathname } = useRouter();

  return (
    <Link
      className={`
          ${
            isActiveNavLink(basePathname, pathname, exact)
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
