import { useState, useEffect, ElementRef, useMemo } from 'react';

export const useOnScreen = (ref: any) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
          root: null,
          rootMargin: '0px',
          threshold: 1.0
        }
      ),
    []
  );

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
};
