import { useFormContext } from "react-hook-form";

import { Stars } from "@/components/Rating/Stars";

import { ReviewFormState } from "./ReviewForm";

export const ReviewFormRating = () => {
  const {
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useFormContext<ReviewFormState>();

  return (
    <>
      <span className="text-sm text-textSecondary">Rate product</span>
      <Stars
        displayMode="scale"
        rating={watch("rating")}
        className="h-8 w-8"
        interactionMode="interactive"
        onClick={(value) => {
          setValue("rating", value);
          trigger("rating");
        }}
      />
      {errors.rating && (
        <span role="alert" className="text-sm text-error">
          {errors.rating.message}
        </span>
      )}
    </>
  );
};
