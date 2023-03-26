import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import lodash from "lodash";
import Link from "next/link";

type Pagination = {
  currentPage: number;
  currentTake: number;
  getPageLink: (page: number, take: number) => string;
  pageCount: number;
};

type PaginationProps = {
  pagination: Pagination;
};

const VISIBLE_PAGES = 5;

const getFirstPageIndex = (currentPageNumber: number, pageCount: number) => {
  const currentPageIndex = currentPageNumber - 1;

  return Math.min(
    Math.max(currentPageIndex - Math.floor(VISIBLE_PAGES / 2), 0),
    pageCount - VISIBLE_PAGES,
  );
};

export const Pagination = ({
  pagination: { currentPage, currentTake, getPageLink, pageCount },
}: PaginationProps) => {
  return (
    <nav className="mt-4">
      <ul className="flex gap-2 items-center">
        <li>
          <Link
            href={getPageLink(1, currentTake)}
            className={`
            ${currentPage === 1 && "pointer-events-none"}
          `}
          >
            <ChevronDoubleLeftIcon className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link
            href={getPageLink(currentPage - 1, currentTake)}
            className={`
            ${currentPage === 1 && "pointer-events-none"}
          `}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Link>
        </li>
        {lodash.times(VISIBLE_PAGES, (index) => {
          const firstPageIndex = getFirstPageIndex(currentPage, pageCount);
          const page = firstPageIndex + index + 1;
          const link = getPageLink(page, currentTake);

          return (
            <li key={page}>
              <Link
                href={link}
                className={`
                 rounded-full hover:bg-cyan-600 hover:text-white flex justify-center items-center h-7 aspect-square
                ${
                  currentPage === page
                    ? "bg-cyan-700 text-white"
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
            href={getPageLink(currentPage + 1, currentTake)}
            className={`
              ${currentPage === pageCount && "pointer-events-none"}
            `}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link
            href={getPageLink(pageCount, currentTake)}
            className={`
              ${currentPage === pageCount && "pointer-events-none"}
            `}
          >
            <ChevronDoubleRightIcon className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
