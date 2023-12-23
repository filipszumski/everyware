import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import lodash from "lodash";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";

import { PAGE_COUNT } from "@/shared/constants";

const VISIBLE_PAGES_BUTTONS = 5;

const getFirstPageNumber = (currentPageNumber: number, pageCount: number) => {
  return Math.min(
    Math.max(currentPageNumber - Math.floor(VISIBLE_PAGES_BUTTONS / 2), 1),
    pageCount - VISIBLE_PAGES_BUTTONS,
  );
};

const getPageLink = (pathname: string, page: number): Url => {
  return {
    pathname: pathname,
    query: {
      page: page,
    },
  };
};

const isBackButtonUnavailable = (currentPage: number) => currentPage === 1;
const isForwardButtonUnavailable = (currentPage: number, limit: number) =>
  currentPage >= limit;

export const Pagination = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const routerQuery = router.query;
  const currentPage = Number(routerQuery.page);

  return (
    <nav className="mt-8">
      <ul className="flex gap-2 items-center justify-center">
        <li>
          <Link
            href={getPageLink(pathname, 1)}
            className={`
            ${isBackButtonUnavailable(currentPage) && "pointer-events-none"}
          `}
          >
            <ChevronDoubleLeftIcon className="h-4 w-4" />
          </Link>
        </li>
        <li>
          <Link
            href={getPageLink(pathname, currentPage - 1)}
            className={`
            ${isBackButtonUnavailable(currentPage) && "pointer-events-none"}
          `}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Link>
        </li>
        {lodash.times(VISIBLE_PAGES_BUTTONS, (index) => {
          const firstPageNumber = getFirstPageNumber(currentPage, PAGE_COUNT);

          const page = firstPageNumber + index;
          const link = getPageLink(pathname, page);

          return (
            <li key={page}>
              <Link
                href={link}
                className={`
                 rounded-full hover:bg-blue-600 hover:text-white flex justify-center items-center h-7 aspect-square
                ${
                  currentPage === page
                    ? "bg-blue-500 text-white pointer-events-none"
                    : "bg-gray-200"
                }  
            `}
              >
                {page}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href={getPageLink(pathname, currentPage + 1)}
            className={`
              ${
                isForwardButtonUnavailable(currentPage, PAGE_COUNT) &&
                "pointer-events-none"
              }
            `}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </li>
        <li>
          <Link
            href={getPageLink(pathname, PAGE_COUNT)}
            className={`
              ${
                isForwardButtonUnavailable(currentPage, PAGE_COUNT) &&
                "pointer-events-none"
              }
            `}
          >
            <ChevronDoubleRightIcon className="h-4 w-4" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
