import React, { createContext, useContext, FC } from 'react';
import { createMedia } from '@artsy/fresnel';
import { MediaContextProviderProps, MediaProps } from '@artsy/fresnel/dist/Media';

export type Breakpoints = 'mobile' | 'tablet' | 'desktop';

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1340,
};

interface FixedCreateMedia {
  MediaContextProvider: React.ComponentType<MediaContextProviderProps<Breakpoints>>
  Media: React.ComponentType<MediaProps<Breakpoints, never>& {as?:any}>
}

export const { MediaContextProvider, Media }:FixedCreateMedia = createMedia({
  breakpoints,
});

const getBreakpoint = () => {
  const bestBreakPoint = Object.entries(breakpoints)
    .slice()
    .reverse()
    .find(([, testWidth]) => window.innerWidth >= testWidth);
  return bestBreakPoint?.[0] || Object.entries(breakpoints)[0][0];
};

export const BreakPointContext = createContext(getBreakpoint());

export const BreakPointProvider: FC = ({ children }) => {
  const [breakpoint, setBreakpoint] = React.useState(getBreakpoint());

  const handleWindowResize = () => {
    setBreakpoint(getBreakpoint());
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <BreakPointContext.Provider value={breakpoint}>
      {children}
    </BreakPointContext.Provider>
  );
};

export const useBreakpoint = () => useContext(BreakPointContext);
