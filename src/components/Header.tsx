import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";

import { NAVIGATION_LIST } from "@/shared/constants";

import logo from "../../public/everyware-logo.svg";
import { NavLink } from "./NavLink";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white  p-4 z-50 border-b-2 border-gray-200">
      <nav className="flex gap-8 items-center justify-between sm:justify-center">
        <Image
          src={logo}
          alt="Everyware shop logo"
          height={40}
          width={180}
          priority
        />
        <ul className="hidden sm:flex sm:gap-4 sm:flex-grow">
          {NAVIGATION_LIST.map((item) => {
            return (
              <li key={item.title}>
                <NavLink href={item.href}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
        <Popover className="sm:hidden">
          <Popover.Button>
            {<Bars3Icon className="w-6 h-6 text-blue-500" />}
          </Popover.Button>
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
                <ul className="p-4 grid grid-cols-1 gap-2 bg-white  border-t-2 border-t-gray-200 shadow-lg">
                  {NAVIGATION_LIST.map((item) => {
                    return (
                      <li key={item.title}>
                        <NavLink
                          href={item.href}
                          onClick={() => {
                            close();
                          }}
                        >
                          {item.title}
                        </NavLink>
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
