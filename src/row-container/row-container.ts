import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const RowContainer = styled.div<IRowContainerProps>`
  align-items: ${({ alignItems } : IRowContainerProps) : string =>
    alignItems || 'center'};
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent } : IRowContainerProps) : string =>
    justifyContent || 'center'};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IRowContainerProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IRowContainerProps extends IResponsiveProps {
  /**
   * Justify Content property for RowContainer component
   * @default center
   */
  alignItems : string;
  /**
   * Justify Content property for RowContainer component
   * @default center
   */
  justifyContent : string;
}
