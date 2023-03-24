import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { NavLinkButton } from "./LinkButton";
import { NAVIGATION_LIST } from "@/shared/constants/navigationList";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-cyan-700 p-4 relative text-white">
      <nav className="flex gap-8 items-center justify-between sm:justify-center">
        <img src="https://picsum.photos/200" alt="Logo" className="w-12 h-12 rounded-xl" />
        <ul className="hidden sm:flex sm:gap-4 sm:flex-grow">
          {NAVIGATION_LIST.map((item) => {
            return (
              <li key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavLinkButton isActive={router.pathname.startsWith(item.pathname)}>{item.title}</NavLinkButton>
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
                  {NAVIGATION_LIST.map((item) => {
                    return (
                      <Link key={item.href} href={item.href} legacyBehavior passHref>
                        <NavLinkButton onClick={() => close()} isActive={router.pathname.startsWith(item.pathname)}>
                          {item.title}
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
