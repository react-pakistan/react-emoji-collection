import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const ChildGrid = styled.div<IChildGridProps>`
  align-self: ${({ alignSelf } : IChildGridProps) : string =>
    alignSelf || 'start'};
  grid-column: ${({ gridColumnStart, gridColumnEnd } : IChildGridProps) : string =>
    `${gridColumnStart} / ${gridColumnEnd}`};
  grid-row: ${({ gridRowStart, gridRowEnd } : IChildGridProps) : string =>
    `${gridRowStart} / ${gridRowEnd}`};
  justify-self: ${({ justifySelf } : IChildGridProps) : string =>
    justifySelf || 'start'};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IChildGridProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IChildGridProps extends IResponsiveProps {
  /**
   * Align Self for the child grid
   * @default start
   */
  alignSelf? : string;
  /**
   * Grid Column Start for the child grid
   */
  gridColumnStart? : number;
  /**
   * Grid Column End for the child grid
   */
  gridColumnEnd? : number;
  /**
   * Grid Row Start for the child grid
   */
  gridRowStart? : number;
  /**
   * Grid Row End for the child grid
   */
  gridRowEnd? : number;
  /**
   * Justify Self for the child grid
   * @default start
   */
  justifySelf? : string;
}
