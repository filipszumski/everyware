export const LOCAL_STORAGE_KEYS = {
  cartItems: "CART_ITEMS",
} as const;

export type LocalStorageKeyValues =
  (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];
