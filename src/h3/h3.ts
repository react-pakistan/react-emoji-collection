import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const H3 = styled.h3<IH3Props>`
  color: ${({ color, theme } : ThemedStyledProps<IH3Props, ITheme>) : string =>
    color || theme.colors.black};
  font-family: ${({ fontFamily, theme } : ThemedStyledProps<IH3Props, ITheme>) : string =>
    fontFamily || theme.typography.h3.fontFamily};
  font-size: ${({ fontSize, theme } : ThemedStyledProps<IH3Props, ITheme>) : string =>
    fontSize || theme.typography.h3.fontSize};
  font-stretch: normal;
  font-style: normal;
  font-weight: ${({ fontWeight, theme } : ThemedStyledProps<IH3Props, ITheme>) : number =>
    fontWeight || theme.typography.h3.fontWeight};
  letter-spacing: ${({ letterSpacing, theme } : ThemedStyledProps<IH3Props, ITheme>) : string =>
    letterSpacing || theme.typography.h3.letterSpacing};
  line-height: ${({ lineHeight, theme } : ThemedStyledProps<IH3Props, ITheme>) : string =>
    lineHeight || theme.typography.h3.lineHeight};
  margin: 0;
  padding: 0;
  text-align: ${({ textAlign, theme } : ThemedStyledProps<IH3Props, ITheme>) : string =>
    textAlign || theme.typography.h3.textAlign};
  text-transform: ${({ textTransform, theme } : ThemedStyledProps<IH3Props, ITheme>) : string =>
    textTransform || theme.typography.h3.textTransform};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IH3Props) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IH3Props extends IResponsiveProps {
  /**
   * Color property for H3 tag
   * @default theme.colors.black
   */
  color? : string;
  /**
   * Font Family property for H3 tag
   * @default theme.typography.h3.fontFamily
   */
  fontFamily? : string;
  /**
   * Font Size property for H3 tag
   * @default theme.typography.h3.fontSize
   */
  fontSize? : string;
  /**
   * Font Weight property for H3 tag
   * @default theme.typography.h3.fontWeight
   */
  fontWeight? : number;
  /**
   * Letter Spacing property for H3 tag
   * @default theme.typography.h3.letterSpacing
   */
  letterSpacing? : string;
  /**
   * Line Height proprty for H3 tag
   * @default theme.typography.h3.lineHeight
   */
  lineHeight? : string;
  /**
   * Text Align property for H3 tag
   * @default theme.typography.h3.textAlign
   */
  textAlign? : string;
  /**
   * Text Transform property for H3 tag
   * @default theme.typography.h3.textTransform
   */
  textTransform? : string;
}
