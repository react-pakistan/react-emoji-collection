import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const Canvas = styled.canvas.attrs<ICanvasAttrsProps>(({
  id,
} : ICanvasAttrsProps) : ICanvasAttrsProps => ({
  id,
}))<ICanvasProps>`
  border: ${({ border } : ICanvasProps) : string => border || ''};
  height: ${({ height } : ICanvasProps) : string => height};
  width: ${({ width } : ICanvasProps) : string => width};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : ICanvasProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface ICanvasAttrsProps {
  /**
   * Specifies the id of the canvas
   */
  id : string;
}

export interface ICanvasProps extends IResponsiveProps {
  /**
   * Specifies the border of the canvas
   * @default ''
   */
  border? : string;
  /**
   * Specifies the height of the canvas
   */
  height : string;
  /**
   * Specifies the width of the canvas
   */
  width : string;
}
