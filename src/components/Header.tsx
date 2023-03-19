import { ROUTES } from "@/utils/routes";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { NavLinkButton } from "./LinkButton";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-cyan-700 p-4 relative text-white">
      <nav className="flex gap-8 items-center justify-between sm:justify-center">
        <img src="https://picsum.photos/200" alt="Logo" className="w-12 h-12 rounded-xl" />
        <ul className="hidden sm:flex sm:gap-4 sm:flex-grow">
          {ROUTES.map((route) => {
            return (
              <li key={route.path}>
                <Link href={route.path} legacyBehavior passHref>
                  <NavLinkButton isActive={router.asPath === route.path}>{route.title}</NavLinkButton>
                </Link>
              </li>
            );
          })}
        </ul>
        <Popover className="sm:hidden">
          <Popover.Button>{<Bars3Icon className="w-8 h-8" />}</Popover.Button>
          <Transition
            className="absolute top-full left-0 min-w-full"
            enter="transition ease-in-out origin-top duration-200"
            enterFrom="scale-y-0 opacity-0"
            enterTo="scale-y-1 opacity-100"
            leave="transition ease-in-out origin-top duration-200"
            leaveFrom="scale-y-1 opacity-100"
            leaveTo="scale-y-0 opacity-0"
          >
            <Popover.Panel className="p-2 bg-cyan-700 grid grid-cols-1 gap-2 w-full border-t-2 border-t-cyan-800">
              {({ close }) => (
                <>
                  {ROUTES.map((route) => {
                    return (
                      <Link key={route.path} href={route.path} legacyBehavior passHref>
                        <NavLinkButton onClick={() => close()} isActive={router.asPath === route.path}>
                          {route.title}
                        </NavLinkButton>
                      </Link>
                    );
                  })}
                </>
              )}
            </Popover.Panel>
          </Transition>
        </Popover>
      </nav>
    </header>
  );
};
