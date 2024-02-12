import { Review } from "@/graphql/generated/graphql";

import { Stars } from "./Stars";
import { RatingDisplayMode } from "./types";

type Props = {
  reviews: Pick<Review, "rating" | "id">[];
  displayMode: RatingDisplayMode;
};

export const Rating = ({ reviews, displayMode }: Props) => {
  const summedRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const reviewsCount = reviews.length;
  const rating = summedRating / reviewsCount;

  return (
    <div className="flex items-center">
      <Stars displayMode={displayMode} rating={rating} />
      <div>
        <span>{rating.toFixed(1)}</span>{" "}
        <span className="text-textSecondary">({reviewsCount})</span>
      </div>
    </div>
  );
};
