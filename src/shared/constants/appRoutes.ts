const PRODUCTS_BASE_PATHNAME = "/products";

export const APP_ROUTES = {
  home: "/",
  products: PRODUCTS_BASE_PATHNAME,
  productsPage: `${PRODUCTS_BASE_PATHNAME}/[page]`,
  productsDetail: `${PRODUCTS_BASE_PATHNAME}/details/[id]`,
};
