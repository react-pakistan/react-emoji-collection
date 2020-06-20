import { IResponsiveProps, ITheme } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const HR = styled.hr<IHRProps>`
  border: ${({ border, theme } : ThemedStyledProps<IHRProps, ITheme>) : string =>
    border || `1px solid ${theme.colors.skyBlue}`};
  margin: ${({ margin } : IHRProps) : string => margin || '0px'};
  padding: ${({ padding } : IHRProps) : string => padding || '0px'};
  width: ${({ width } : ThemedStyledProps<IHRProps, ITheme>) : string =>
    width || '100%'};
`;

export interface IHRProps extends IResponsiveProps {
  /**
   * Border property for HR Component
   * @default '1px solid #1E90FF'
   */
  border? : string;
  /**
   * Specifies margin for HR component
   * @default '0px'
   */
  margin? : string;
  /**
   * Specifies padding for HR component
   * @default '0px'
   */
  padding? : string;
  /**
   * Width property for HR Component
   * @default 100%
   */
  width? : string;
}
