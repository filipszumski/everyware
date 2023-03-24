import { useRouter } from "next/router";
import queryString from "query-string";
import { DEFAULT_TAKE } from "../constants/defaultSearchParamsValues";

export const usePaginationSsr = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const searchParams = router.query;

  const currentPage = Number(searchParams.page);
  const pageCount = 20;

  const getPageLink = (page: number) => {
    const paginationSearchParams = queryString.stringify({ page });

    return `${pathname}?${paginationSearchParams}`;
  };

  return {
    pagination: {
      currentPage: currentPage,
      currentTake: DEFAULT_TAKE,
      getPageLink,
      pageCount,
    },
  };
};
