import { RATING_SCALE } from "@/shared/constants/ratingScale";

import { StarIcon } from "./StarIcon";
import { RatingDisplayMode } from "./types";

type Props = {
  displayMode: RatingDisplayMode;
  rating: number;
};

export const Stars = ({ rating, displayMode }: Props) => {
  const fillRatio = rating % 1;
  const fullStars = Math.floor(rating);

  if (displayMode === "icon") {
    return <StarIcon fillRatio={fillRatio} />;
  }

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: RATING_SCALE }, (_v, index) => {
        if (index < fullStars) {
          return <StarIcon key={index} fillRatio={1} />;
        }
        if (index === fullStars && fillRatio > 0) {
          return <StarIcon key={index} fillRatio={fillRatio} />;
        }
        return <StarIcon key={index} fillRatio={0} />;
      })}
    </div>
  );
};
