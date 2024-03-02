import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button";
import { TextField } from "@/components/Form/Input/TextField";
import { API_ROUTES } from "@/shared/constants/appRoutes";

import { newsletterFormSchema } from "./newsletterFormSchema";

type NewsletterForm = z.infer<typeof newsletterFormSchema>;

const newsletterFormDefaultValues = {
  email: "",
};

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterForm>({
    defaultValues: newsletterFormDefaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(newsletterFormSchema),
  });

  const onSubmit: SubmitHandler<NewsletterForm> = async (data) => {
    const parsedFormData = newsletterFormSchema.safeParse(data);

    if (parsedFormData.success) {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_APP_URL}${API_ROUTES.newsletter}`,
          parsedFormData.data,
        );
        reset();
      } catch (e) {
        console.error("An error occurred");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2 justify-center items-start"
    >
      <TextField
        {...register("email")}
        error={errors.email?.message}
        className="w-72"
      />
      <Button type="submit" variant="outlined" disabled={isSubmitting}>
        Subscribe
      </Button>
    </form>
  );
};
