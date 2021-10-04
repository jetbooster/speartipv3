import { useEffect, useState } from 'react';

export const useDelayedMount = (isMounted:boolean, mountTime:number, visibleTime:number) => {
  const [shouldMount, setShouldMount] = useState(true);
  const [shouldVisible, setShouldVisible] = useState(false);

  useEffect(() => {
    let timeoutId1: number;
    if (!isMounted && shouldMount) {
      setShouldMount(false);
      setShouldVisible(false);
    } else if (isMounted && !shouldMount) {
      timeoutId1 = window.setTimeout(
        () => {
          setShouldMount(true);
        },
        mountTime,
      );
      window.setTimeout(
        () => {
          setShouldVisible(true);
        }, visibleTime - mountTime,
      );
    } else if (shouldMount && isMounted) {
      window.setTimeout(
        () => {
          setShouldVisible(true);
        }, visibleTime - mountTime,
      );
    }
    return () => {
      clearTimeout(timeoutId1);
    };
  }, [isMounted, mountTime, visibleTime, shouldMount, shouldVisible]);
  return [shouldMount, shouldVisible];
};

export default useDelayedMount;
