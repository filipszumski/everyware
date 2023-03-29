import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { NAVIGATION_LIST } from "@/shared/constants";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 bg-cyan-700 p-4 z-50  text-white">
      <nav className="flex gap-8 items-center justify-between sm:justify-center">
        <Image
          src="https://picsum.photos/200"
          alt="Logo"
          width={48}
          height={48}
          className="rounded-lg"
        />
        <ul className="hidden sm:flex sm:gap-4 sm:flex-grow">
          {NAVIGATION_LIST.map((item) => {
            return (
              <li key={item.pathname}>
                <Link
                  href={item.href}
                  className={`
                    ${router.pathname === item.pathname && "bg-cyan-800"}
                    p-2 rounded-lg hover:bg-cyan-600 w-full
  `}
                >
                  {item.title}
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
            <Popover.Panel className="">
              {({ close }) => (
                <ul className="p-4 grid grid-cols-1 gap-2 border-t-2 bg-cyan-700  border-t-cyan-800">
                  {NAVIGATION_LIST.map((item) => {
                    return (
                      <li key={item.pathname}>
                        <Link
                          onClick={() => close()}
                          href={item.href}
                          className={`
                            ${
                              router.pathname === item.pathname && "bg-cyan-800"
                            }
                            p-2 rounded-lg hover:bg-cyan-600 inline-block w-full
      `}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Popover.Panel>
          </Transition>
        </Popover>
      </nav>
    </header>
  );
};
