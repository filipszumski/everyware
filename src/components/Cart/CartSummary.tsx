import Link from "next/link";
import { useRouter } from "next/router";

import { useCartContext } from "@/context/cartContext/CartContext";
import { APP_ROUTES } from "@/shared/constants";

import { buttonVariants } from "../Button";
import { Price } from "../Product/Price";
import { CartSummaryRow } from "./CartSummaryRow";

export const CartSummary = () => {
  const router = useRouter();
  const { summaryPrice } = useCartContext();

  const displayCheckoutButton = router.pathname.startsWith(APP_ROUTES.cart);

  return (
    <div
      className={`
      sticky left-0 bottom-0 w-full p-4 bg-backgroundLight border-solid border-2 border-borderDefault rounded-md shadow-md self-start grid grid-cols-1 gap-2
      md:top-header md:bg-white md:gap-4`}
    >
      <h2 className="text-lg font-bold">Cart summary</h2>
      <div className="grid grid-cols-1 divide-y-2 divide-borderDefault">
        <CartSummaryRow>
          <div>Subtotal</div>
          <div>{summaryPrice}</div>
        </CartSummaryRow>
        <CartSummaryRow>
          <div>Shipping</div>
          <div className="font-bold">Free!</div>
        </CartSummaryRow>
        <CartSummaryRow>
          <div className="font-bold">Total</div>
          <Price className="text-base">{summaryPrice}</Price>
        </CartSummaryRow>
      </div>
      {!!displayCheckoutButton && (
        <Link
          href={APP_ROUTES.checkout}
          className={buttonVariants({
            variant: "contained",
            className: "md:w-full",
          })}
        >
          Proceed to checkout
        </Link>
      )}
    </div>
  );
};
