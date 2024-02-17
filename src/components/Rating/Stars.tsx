import { SVGProps } from "react";

import { RATING_SCALE } from "@/shared/constants/ratingScale";

import { StarIcon } from "./StarIcon";
import { RatingDisplayMode } from "./types";

type Props = SVGProps<SVGElement> & {
  displayMode: RatingDisplayMode;
  rating: number;
};

export const Stars = ({ rating, displayMode, className }: Props) => {
  const fillRatio = rating % 1;
  const fullStars = Math.floor(rating);

  if (displayMode === "icon") {
    return <StarIcon fillRatio={fillRatio} />;
  }

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: RATING_SCALE }, (_v, index) => {
        if (index < fullStars) {
          return <StarIcon key={index} fillRatio={1} className={className} />;
        }
        if (index === fullStars && fillRatio > 0) {
          return (
            <StarIcon key={index} fillRatio={fillRatio} className={className} />
          );
        }
        return <StarIcon key={index} fillRatio={0} className={className} />;
      })}
    </div>
  );
};
