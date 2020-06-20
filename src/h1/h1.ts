import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const H1 = styled.h1<IH1Props>`
  color: ${({ color, theme } : ThemedStyledProps<IH1Props, ITheme>) : string =>
    color || theme.colors.black};
  font-family: ${({ fontFamily, theme } : ThemedStyledProps<IH1Props, ITheme>) : string =>
    fontFamily || theme.typography.h1.fontFamily};
  font-size: ${({ fontSize, theme } : ThemedStyledProps<IH1Props, ITheme>) : string =>
    fontSize || theme.typography.h1.fontSize};
  font-stretch: normal;
  font-style: normal;
  font-weight: ${({ fontWeight, theme } : ThemedStyledProps<IH1Props, ITheme>) : number =>
    fontWeight || theme.typography.h1.fontWeight};
  letter-spacing: ${({ letterSpacing, theme } : ThemedStyledProps<IH1Props, ITheme>) : string =>
    letterSpacing || theme.typography.h1.letterSpacing};
  line-height: ${({ lineHeight, theme } : ThemedStyledProps<IH1Props, ITheme>) : string =>
    lineHeight || theme.typography.h1.lineHeight};
  margin: 0;
  padding: 0;
  text-align: ${({ textAlign, theme } : ThemedStyledProps<IH1Props, ITheme>) : string =>
    textAlign || theme.typography.h1.textAlign};
  text-transform: ${({ textTransform, theme } : ThemedStyledProps<IH1Props, ITheme>) : string =>
    textTransform || theme.typography.h1.textTransform};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IH1Props) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IH1Props extends IResponsiveProps {
  /**
   * Color property for H1 tag
   * @default theme.colors.black
   */
  color? : string;
  /**
   * Font Family property for H1 tag
   * @default theme.typography.h1.fontFamily
   */
  fontFamily? : string;
  /**
   * Font Size property for H1 tag
   * @default theme.typography.h1.fontSize
   */
  fontSize? : string;
  /**
   * Font Weight property for H1 tag
   * @default theme.typography.h1.fontWeight
   */
  fontWeight? : number;
  /**
   * Letter Spacing property for H1 tag
   * @default theme.typography.h1.letterSpacing
   */
  letterSpacing? : string;
  /**
   * Line Height proprty for H1 tag
   * @default theme.typography.h1.lineHeight
   */
  lineHeight? : string;
  /**
   * Text Align property for H1 tag
   * @default theme.typography.h1.textAlign
   */
  textAlign? : string;
  /**
   * Text Transform property for H1 tag
   * @default theme.typography.h1.textTransform
   */
  textTransform? : string;
}
