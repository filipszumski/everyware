import { useRouter } from "next/router";
import { useEffect } from "react";

import { CartSummary } from "@/components/Cart/CartSummary";
import { CheckoutForm } from "@/components/Checkout/CheckoutForm";
import { PageSpinner } from "@/components/Spinner/PageSpinner";
import { useCartContext } from "@/context/cartContext/CartContext";
import { APP_ROUTES } from "@/shared/constants";

const CheckoutPage = () => {
  const { isCartItemsFromLocalStorageSet, allCartItemsQuantity } =
    useCartContext();
  const router = useRouter();

  const isCartEmpty = isCartItemsFromLocalStorageSet && !allCartItemsQuantity;

  const displayLoading = !isCartItemsFromLocalStorageSet || isCartEmpty;

  useEffect(() => {
    if (isCartEmpty) {
      router.replace(APP_ROUTES.cart);
    }
  }, [isCartEmpty, router]);

  if (displayLoading) {
    return <PageSpinner />;
  }

  return (
    <div
      className={`
      grid grid-cols-1 gap-y-6 bg-backgroundLight p-6 rounded-lg shadow-md
      md:grid-cols-3 md:gap-6 `}
    >
      <CheckoutForm />
      <CartSummary />
    </div>
  );
};

export default CheckoutPage;
