import { useEffect, useState } from 'react';

export const useRocketLoader = (loadingData: boolean) => {
  const [showLaunches, setShowLaunches] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!loadingData) setShowLaunches(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [loadingData]);

  return showLaunches;
};
