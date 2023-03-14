import { ROUTES } from "@/utils/routes";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Bars3Icon } from "@heroicons/react/20/solid";

const NAV_LINK_BG = "bg-gray-900";
const NAV_LINK_STYLES = "p-2 rounded-lg hover:bg-gray-700";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-gray-800 p-4 relative text-white">
      <nav className="flex gap-8 items-center justify-between sm:justify-center">
        <img src="https://picsum.photos/200" alt="Logo" className="w-12 h-12 rounded-xl" />
        <ul className="hidden sm:flex sm:gap-4 sm:flex-grow">
          {ROUTES.map((route) => {
            return (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={`
              ${router.asPath === route.path && NAV_LINK_BG}
              ${NAV_LINK_STYLES}
              `}
                >
                  {route.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Popover className="sm:hidden">
          <Popover.Button>{<Bars3Icon className="w-8 h-8" />}</Popover.Button>
          <Popover.Panel className="absolute top-full left-0 p-2 bg-gray-800 grid grid-cols-1 gap-2 w-full border-t-2 border-t-gray-900">
            {ROUTES.map((route) => {
              return (
                <Popover.Button
                  key={route.path}
                  className={`
                  ${router.asPath === route.path && NAV_LINK_BG}
                  ${NAV_LINK_STYLES}
                  `}
                  as={Link}
                  href={route.path}
                >
                  {route.title}
                </Popover.Button>
              );
            })}
          </Popover.Panel>
        </Popover>
      </nav>
    </header>
  );
};
