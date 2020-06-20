import { ITheme } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const SwatchPaletteContainer = styled.div<{}>`
  border: 1px solid ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.lightBlack};
`;

export const SwatchPalette = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1em;
`;

export const SwatchPaletteLabel = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Swatch = styled.div<ISwatchProps>`
  background-color: ${({ backgroundColor } : ISwatchProps) : string => backgroundColor};
  height: 100px;
  opacity: ${({ opacity } : ISwatchProps) : number => opacity};
  width: 100px;
`;

export interface ISwatchProps {
  /**
   * Specifies the background color of Swatch component
   */
  backgroundColor : string;
  /**
   * Specifies the opacity of Swatch component
   */
  opacity : number;
}
