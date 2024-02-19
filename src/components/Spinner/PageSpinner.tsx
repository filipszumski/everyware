import { Spinner } from "./Spinner";
import { SpinnerProps } from "./types";

export const PageSpinner = (props: SpinnerProps) => {
  return (
    <div className="absolute left-1/2 top-1/2 translate-x-1/2 -translate-y-1/2">
      <Spinner size={"large"} {...props} />
    </div>
  );
};
