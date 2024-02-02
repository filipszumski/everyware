export type FunctionType<T extends unknown[], K> = (...args: T) => K;
type DelayedFunction<T extends unknown[], K> = FunctionType<T, K> & {
  cancel: () => void;
};

export const withDelay = <T extends unknown[], K>(
  callback: FunctionType<T, K>,
  time: number,
): DelayedFunction<T, void> => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const delayedFunction = (...args: T) => {
    timeoutId = setTimeout(() => callback(...args), time);
  };

  delayedFunction.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return delayedFunction;
};
