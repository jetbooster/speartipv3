import React from 'react';
import { Rail, StrictRailProps, Segment } from 'semantic-ui-react';
import { Media, Breakpoints } from '../contextProviders/MediaContext';

interface ResponsiveRailProps {
  railProps?: StrictRailProps
  text: string,
  breakpoint?: Breakpoints
  RailReplacementItem?: React.ReactElement
  hide?:boolean
}
const defaultRailProps: StrictRailProps = {
  position: 'left',
  size: 'large',
  close: 'very',
};

export const ResponsiveRail = ({
  railProps, text, RailReplacementItem, breakpoint, hide,
}:ResponsiveRailProps) => {
  const railPropsFixed = { ...defaultRailProps, ...railProps };

  return (
    <>
      <Media greaterThan={breakpoint}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Rail {...railPropsFixed}>
          <Segment size="large"><b>{RailReplacementItem || text}</b></Segment>
        </Rail>
      </Media>
      {!hide && (
        <>
          <Media at={breakpoint}>
            <h2 style={{ paddingLeft: '1em' }}><b>{text}</b></h2>
          </Media>
          <Media lessThan={breakpoint}>
            <h2 style={{ paddingLeft: '1em' }}><b>{text}</b></h2>
          </Media>
        </>
      )}
    </>
  );
};

ResponsiveRail.defaultProps = {
  railProps: defaultRailProps,
  breakpoint: 'tablet',
  RailReplacementItem: undefined,
  hide: false,
};
