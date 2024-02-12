import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import lodash from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";

import { DEFAULT_TAKE, PAGE_COUNT } from "@/shared/constants";
import { twMerge } from "@/shared/utilities/twMerge";

import {
  getDisabledButtonClass,
  getFirstPageNumber,
  getPageLink,
} from "./utils";

const MAX_VISIBLE_PAGE_BUTTONS = 5;

type Props = {
  itemsCount: number;
};

export const Pagination = ({ itemsCount }: Props) => {
  const router = useRouter();
  const pathname = router.pathname;
  const routerQuery = router.query;
  const currentPage = Number(routerQuery.page);

  const pageButtonsCount = Math.ceil(itemsCount / DEFAULT_TAKE);

  const actualPageButtonsCount =
    pageButtonsCount >= 5 ? MAX_VISIBLE_PAGE_BUTTONS : pageButtonsCount;

  const backwardButtonDisabledClass = getDisabledButtonClass({
    direction: "backward",
    currentPage,
  });
  const forwardButtonDisabledClass = getDisabledButtonClass({
    direction: "forward",
    currentPage,
    limit: actualPageButtonsCount,
  });

  return (
    <nav className="mt-8">
      <ul className="flex gap-2 items-center justify-center">
        <li>
          <Link
            href={getPageLink(pathname, 1)}
            className={twMerge({
              ...backwardButtonDisabledClass,
            })}
          >
            <ChevronDoubleLeftIcon className="h-4 w-4" />
          </Link>
        </li>
        <li>
          <Link
            href={getPageLink(pathname, currentPage - 1)}
            className={twMerge({
              ...backwardButtonDisabledClass,
            })}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Link>
        </li>
        {lodash.times(actualPageButtonsCount, (index) => {
          const firstPageNumber = getFirstPageNumber(
            currentPage,
            PAGE_COUNT,
            itemsCount,
          );

          const page = firstPageNumber + index;
          const link = getPageLink(pathname, page);

          return (
            <li key={page}>
              <Link
                href={link}
                className={twMerge(
                  "rounded-full hover:bg-primaryLight hover:text-textDefault flex justify-center items-center h-7 aspect-square bg-backgroundLight",
                  {
                    "bg-primary text-onPrimary pointer-events-none":
                      currentPage === page,
                  },
                )}
              >
                {page}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href={getPageLink(pathname, currentPage + 1)}
            className={twMerge({
              ...forwardButtonDisabledClass,
            })}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </li>
        <li>
          <Link
            href={getPageLink(pathname, actualPageButtonsCount)}
            className={twMerge({
              ...forwardButtonDisabledClass,
            })}
          >
            <ChevronDoubleRightIcon className="h-4 w-4" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
