import { useEffect, useMemo } from "react";

import { FunctionType, withDelay } from "../utilities/withDelay";

export const useDelayedFunction = <T extends unknown[], K>(
  callback: FunctionType<T, K>,
  deps: unknown[],
  time: number,
) => {
  const delayedFunction = useMemo(
    () => withDelay(callback, time),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...deps, time],
  );

  useEffect(() => {
    return () => delayedFunction.cancel();
  }, [delayedFunction]);

  return [delayedFunction];
};
