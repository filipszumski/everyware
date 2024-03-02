const PRODUCTS_BASE_PATHNAME = "/products";
const PRODUCTS_DETAILS_PATHNAME = `${PRODUCTS_BASE_PATHNAME}/details`;

export const APP_ROUTES = {
  home: "/",
  products: PRODUCTS_BASE_PATHNAME,
  productsPage: `${PRODUCTS_BASE_PATHNAME}/[page]`,
  productsDetails: PRODUCTS_DETAILS_PATHNAME,
  productDetails: `${PRODUCTS_DETAILS_PATHNAME}/[slug]`,
  cart: "/cart",
  checkout: "/checkout",
};

export const API_ROUTES = {
  newsletter: "/api/newsletter",
};
