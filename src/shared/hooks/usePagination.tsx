import { useRouter } from "next/router";
import queryString from "query-string";
import { useEffect } from "react";
import { DEFAULT_OFFSET, DEFAULT_TAKE } from "../constants";

export const usePagination = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const searchParams = router.query;

  const currentOffset = Number(searchParams.offset);
  const currentTake = Number(searchParams.take);
  const currentPage = currentOffset / currentTake + 1;
  const pageCount = 10;

  useEffect(() => {
    if (currentOffset >= 0 && currentTake > 0) {
      return;
    }

    router.replace({
      pathname: pathname,
      query: {
        offset: currentOffset || DEFAULT_OFFSET,
        take: currentTake || DEFAULT_TAKE,
      },
    });
  }, [currentOffset, pathname, router, currentTake]);

  const getPageLink = (page: number, take: number) => {
    const offset = (page - 1) * take;
    const paginationSearchParams = queryString.stringify({ offset, take });

    return `${pathname}?${paginationSearchParams}`;
  };

  return {
    currentPage: currentPage || 1,
    currentTake: currentTake || DEFAULT_TAKE,
    getPageLink,
    pageCount,
  };
};
