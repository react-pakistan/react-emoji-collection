import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const Grid = styled.div`
	align-items: ${({ alignItems } : IGridProps) : string => alignItems || 'center'};
	display: grid;
	grid-column-gap: ${({ columnGap } : IGridProps) : string => columnGap || '0'};
	grid-row-gap: ${({ rowGap } : IGridProps) : string => rowGap || '0'};
	grid-template-columns: ${({ gridColumn } : IGridProps) : string => gridColumn || '1fr 1fr'};
	grid-template-rows: ${({ gridRow } : IGridProps) : string => gridRow || '1fr'};
  height: ${({ height } : IGridProps) : string => height || 'auto'};
	justify-items: ${({ justifyItems } : IGridProps) : string => justifyItems || 'stretch'};
	width: ${({ width } : IGridProps) : string => width || '100%'};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IGridProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IGridProps extends IResponsiveProps {
  /**
   * Specifies Align Items property for Grid component
   * @default center
   */
  alignItems? : string;
  /**
   * Specifies Grid Column Gap property for Grid component
   * @default 0
   */
  columnGap? : string;
  /**
   * Specifies Grid Template Column property for Grid component
   * @default 1fr 1fr
   */
  gridColumn? : string;
  /**
   * Specifies Grid Template Row property for Grid component
   * @default 1fr
   */
  gridRow? : string;
  /**
   * Specifies Grid height propery for Grid component
   * @default auto
   */
  height? : string;
  /**
   * Specifies Justify Items property for Grid component
   * @default stretch
   */
  justifyItems? : string;
  /**
   * Specifies Grid Column property for Grid component
   * @default 0
   */
  rowGap? : string;
  /**
   * Speicifies Grid width property for Grid component
   * @default 100%
   */
  width? : string;
}
