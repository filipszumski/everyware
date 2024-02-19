import { VariantProps } from "class-variance-authority";

import { spinnerVariants } from "./Spinner";

export type SpinnerProps = VariantProps<typeof spinnerVariants> & {
  className?: string;
};
