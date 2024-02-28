import { withLoader } from "@/shared/utilities/withLoader";

import { SkeletonElement } from "../SkeleteonElement";
import { Stars } from "./Stars";
import { RatingDisplayMode } from "./types";

type Props = {
  ratingValue: number;
  reviewCount: number;
  displayMode: RatingDisplayMode;
  loading?: boolean;
};

const ReviewsData = ({
  ratingValue,
  reviewCount,
}: Pick<Props, "ratingValue" | "reviewCount">) => {
  return (
    <div>
      <span>{ratingValue.toFixed(1)}</span>{" "}
      <span className="text-textSecondary">({reviewCount})</span>
    </div>
  );
};

// FIX CLIENT RENDERING COMPONENT
export const Rating = ({
  ratingValue,
  reviewCount,
  displayMode,
  loading,
}: Props) => {
  const ReviewsDataComponent =
    typeof loading === "boolean" ? withLoader(ReviewsData) : ReviewsData;

  return (
    <div className="flex items-center">
      <Stars
        displayMode={displayMode}
        rating={ratingValue}
        interactionMode="static"
      />
      <ReviewsDataComponent
        loader={<SkeletonElement className="w-14" />}
        reviewCount={reviewCount}
        ratingValue={ratingValue}
        loading={!!loading}
      />
    </div>
  );
};
