import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const Wrapper = styled.div<IWrapperProps>`
  width: ${({ width } : IWrapperProps) : string => width};
  margin: 0 auto;

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IWrapperProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IWrapperProps extends IResponsiveProps {
  /**
   * Width for the Wrapper component
   */
  width : string;
}
