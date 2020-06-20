import React, { ReactElement } from 'react';

const getDisplayName = (Component : any) : any => Component.displayName || 'Component';

export const withResponsive = (WrappedComponent : any) : any => {
  const Wrapper = ({
    ...rest
  } : IResponsiveProps) : ReactElement => (
    <WrappedComponent
      {...rest}
    />
  );

  Wrapper.displayName = `withFieldLabel(${getDisplayName(
    WrappedComponent,
  )})`;

  return Wrapper;
};

export interface IResponsiveProps {
  /**
   * Specifies the CSS block on desktop devices
   */
  desktop? : string;
  /**
   * Specifies the CSS block on laptop devices
   */
  laptop? : string;
  /**
   * Specifies the CSS block on large laptop devices
   */
  laptopL? : string;
  /**
   * Specifies the CSS block on large mobile devices
   */
  mobileL? : string;
  /**
   * Specifies the CSS block on medium mobile devices
   */
  mobileM? : string;
  /**
   * Specifies the CSS block on small mobile devices
   */
  mobileS? : string;
  /**
   * Specifies the CSS block on tablet devices
   */
  tablet? : string;
}
