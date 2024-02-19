import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../Button";
import { Input } from "../Form/Input";
import { RowContainer } from "./RowContainer";
import { checkoutFormSchema } from "./schema";

type CheckoutForm = z.infer<typeof checkoutFormSchema>;

export const CheckoutForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CheckoutForm>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(checkoutFormSchema),
  });

  const onSubmit: SubmitHandler<CheckoutForm> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-4 col-span-2"
    >
      <h2 className="font-bold text-lg">Contact information</h2>
      <Input
        fullWidth
        {...register("email")}
        label="Email"
        required
        error={errors.email?.message}
      />
      <h2 className="font-bold text-lg">Payment details</h2>
      <Input
        fullWidth
        {...register("nameOnCard")}
        label="Name on card"
        required
        error={errors.nameOnCard?.message}
      />
      <Input
        {...register("cardNumber")}
        label="Card number"
        required
        error={errors.cardNumber?.message}
        fullWidth
      />
      <RowContainer>
        <Input
          {...register("expirationDate")}
          label="Experation date (MM/YY)"
          error={errors.expirationDate?.message}
          required
          fullWidth
        />
        <Input
          {...register("cvc")}
          label="CVC"
          error={errors.cvc?.message}
          required
          fullWidth
        />
      </RowContainer>
      <h2 className="font-bold text-lg">Shipping address</h2>
      <Input
        {...register("company")}
        label="Company"
        error={errors.company?.message}
        fullWidth
      />
      <Input
        {...register("address")}
        label="Address"
        error={errors.address?.message}
        fullWidth
        required
      />
      <RowContainer>
        <Input
          {...register("apartment")}
          label="Apartment"
          error={errors.apartment?.message}
          fullWidth
        />
        <Input
          {...register("city")}
          label="City"
          error={errors.city?.message}
          fullWidth
          required
        />
      </RowContainer>
      <RowContainer>
        <Input
          {...register("region")}
          label="State / Province"
          error={errors.region?.message}
          fullWidth
          required
        />
        <Input
          {...register("postalCode")}
          label="Postal code"
          error={errors.postalCode?.message}
          fullWidth
          required
        />
      </RowContainer>
      <Button type="submit">Submit</Button>
    </form>
  );
};
