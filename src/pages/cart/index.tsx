import { CartContent } from "@/components/CartContent";
import { CartSummary } from "@/components/CartSummary";
import { useCartContext } from "@/context/cartContext/CartContext";

const CartPage = () => {
  const { cartItems } = useCartContext();

  return (
    <>
      {cartItems.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CartContent />
          <CartSummary />
        </div>
      ) : (
        <div className="text-lg flex justify-center">Cart is empty!</div>
      )}
    </>
  );
};

export default CartPage;
