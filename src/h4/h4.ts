import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const H4 = styled.h4<IH4Props>`
  color: ${({ color, theme } : ThemedStyledProps<IH4Props, ITheme>) : string =>
    color || theme.colors.black};
  font-family: ${({ fontFamily, theme } : ThemedStyledProps<IH4Props, ITheme>) : string =>
    fontFamily || theme.typography.h4.fontFamily};
  font-size: ${({ fontSize, theme } : ThemedStyledProps<IH4Props, ITheme>) : string =>
    fontSize || theme.typography.h4.fontSize};
  font-style: normal;
  font-stretch: normal;
  font-weight: ${({ fontWeight, theme } : ThemedStyledProps<IH4Props, ITheme>) : number =>
    fontWeight || theme.typography.h4.fontWeight};
  letter-spacing: ${({ letterSpacing, theme } : ThemedStyledProps<IH4Props, ITheme>) : string =>
    letterSpacing || theme.typography.h4.letterSpacing};
  line-height: ${({ lineHeight, theme } : ThemedStyledProps<IH4Props, ITheme>) : string =>
    lineHeight || theme.typography.h4.lineHeight};
  margin: 0;
  padding: 0;
  text-align: ${({ textAlign, theme } : ThemedStyledProps<IH4Props, ITheme>) : string =>
    textAlign || theme.typography.h4.textAlign};
  text-transform: ${({ textTransform, theme } : ThemedStyledProps<IH4Props, ITheme>) : string =>
    textTransform || theme.typography.h4.textTransform};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IH4Props) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IH4Props extends IResponsiveProps {
  /**
   * Color property for H4 tag
   * @default theme.colors.black
   */
  color? : string;
  /**
   * Font Family property for H4 tag
   * @default theme.typography.h4.fontFamily
   */
  fontFamily? : string;
  /**
   * Font Size property for H4 tag
   * @default theme.typography.h4.fontSize
   */
  fontSize? : string;
  /**
   * Font Weight property for H4 tag
   * @default theme.typography.h4.fontWeight
   */
  fontWeight? : number;
  /**
   * Letter Spacing property for H4 tag
   * @default theme.typography.h4.letterSpacing
   */
  letterSpacing? : string;
  /**
   * Line Height proprty for H4 tag
   * @default theme.typography.h4.lineHeight
   */
  lineHeight? : string;
  /**
   * Specifies the CSS block on tablet devices
   */
  tablet? : string;
  /**
   * Text Align property for H4 tag
   * @default theme.typography.h4.textAlign
   */
  textAlign? : string;
  /**
   * Text Transform property for H4 tag
   * @default theme.typography.h4.textTransform
   */
  textTransform? : string;
}
