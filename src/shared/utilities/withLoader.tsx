import { ComponentType, useEffect, useState } from "react";

export const withLoader = <T extends object>(Component: ComponentType<T>) => {
  const WithLoaderComponent = (
    props: T & { loader: JSX.Element; loading: boolean },
  ) => {
    const { loader, loading } = props;
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);

    if (loading || !mounted) {
      return loader;
    }

    return <Component {...props} />;
  };

  return WithLoaderComponent;
};
