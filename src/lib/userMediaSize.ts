import { useMediaQuery } from 'react-responsive';
import tailwind from '@/../tailwind.config'; // Your tailwind config
import { useState, useEffect } from 'react';
import _ from 'lodash';

const useMediaSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!tailwind.theme) {
    return 'xs'
  }

  let breakpoints = _.toPairs(tailwind.theme.screens).map(
    (breakpoint) => {
      return [breakpoint[0], parseInt(breakpoint[1])];
    }
  );

  breakpoints = breakpoints.sort((a, b) => {
    return (a[1] as number) - (b[1] as number);
  });

  let currentBreakpoint = breakpoints[0][0];

  breakpoints.forEach((breakpoint) => {
    if (screenSize.width as number >= (breakpoint[1] as number)) {
      currentBreakpoint = breakpoint[0];
    }
  });

  return currentBreakpoint;
};

export default useMediaSize;