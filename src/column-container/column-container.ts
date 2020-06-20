import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const ColumnContainer = styled.div<IColumnContainerProps>`
  align-items: ${({ alignItems } : IColumnContainerProps) : string =>
    alignItems || 'center'};
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent } : IColumnContainerProps) : string =>
    justifyContent || 'center'};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IColumnContainerProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IColumnContainerProps extends IResponsiveProps {
  /**
   * Align Items property for RowContainer component
   * @default center
   */
  alignItems : string;
  /**
   * Justify Content property for RowContainer component
   * @default center
   */
  justifyContent : string;
}
