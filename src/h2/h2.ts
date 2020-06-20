import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const H2 = styled.h2<IH2Props>`
  color: ${({ color, theme } : ThemedStyledProps<IH2Props, ITheme>) : string =>
    color || theme.colors.black};
  font-family: ${({ fontFamily, theme } : ThemedStyledProps<IH2Props, ITheme>) : string =>
    fontFamily || theme.typography.h2.fontFamily};
  font-size: ${({ fontSize, theme } : ThemedStyledProps<IH2Props, ITheme>) : string =>
    fontSize || theme.typography.h2.fontSize};
  font-stretch: normal;
  font-style: normal;
  font-weight: ${({ fontWeight, theme } : ThemedStyledProps<IH2Props, ITheme>) : number =>
    fontWeight || theme.typography.h2.fontWeight};
  letter-spacing: ${({ letterSpacing, theme } : ThemedStyledProps<IH2Props, ITheme>) : string =>
    letterSpacing || theme.typography.h2.letterSpacing};
  line-height: ${({ lineHeight, theme } : ThemedStyledProps<IH2Props, ITheme>) : string =>
    lineHeight || theme.typography.h2.lineHeight};
  margin: 0;
  padding: 0;
  text-align: ${({ textAlign, theme } : ThemedStyledProps<IH2Props, ITheme>) : string =>
    textAlign || theme.typography.h2.textAlign};
  text-transform: ${({ textTransform, theme } : ThemedStyledProps<IH2Props, ITheme>) : string =>
    textTransform || theme.typography.h2.textTransform};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IH2Props) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IH2Props extends IResponsiveProps {
  /**
   * Color property for H2 tag
   * @default theme.colors.black
   */
  color? : string;
  /**
   * Font Family property for H2 tag
   * @default theme.typography.h2.fontFamily
   */
  fontFamily? : string;
  /**
   * Font Size property for H2 tag
   * @default theme.typography.h2.fontSize
   */
  fontSize? : string;
  /**
   * Font Weight property for H2 tag
   * @default theme.typography.h2.fontWeight
   */
  fontWeight? : number;
  /**
   * Letter Spacing property for H2 tag
   * @default theme.typography.h2.letterSpacing
   */
  letterSpacing? : string;
  /**
   * Line Height proprty for H2 tag
   * @default theme.typography.h2.lineHeight
   */
  lineHeight? : string;
  /**
   * Text Align property for H2 tag
   * @default theme.typography.h2.textAlign
   */
  textAlign? : string;
  /**
   * Text Transform property for H2 tag
   * @default theme.typography.h2.textTransform
   */
  textTransform? : string;
}
