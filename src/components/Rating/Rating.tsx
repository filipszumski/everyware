import { Stars } from "./Stars";
import { RatingDisplayMode } from "./types";

type Props = {
  ratingValue: number;
  reviewCount: number;
  displayMode: RatingDisplayMode;
};

export const Rating = ({ ratingValue, reviewCount, displayMode }: Props) => {
  return (
    <div className="flex items-center">
      <Stars displayMode={displayMode} rating={ratingValue} />
      <div>
        <span>{ratingValue.toFixed(1)}</span>{" "}
        <span className="text-textSecondary">({reviewCount})</span>
      </div>
    </div>
  );
};
