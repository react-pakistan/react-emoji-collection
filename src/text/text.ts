import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const Text = styled.p<ITextProps>`
  color: ${({ color, theme } : ThemedStyledProps<ITextProps, ITheme>) : string =>
    color || theme.colors.black};
  font-family: ${({ fontFamily, theme } : ThemedStyledProps<ITextProps, ITheme>) : string =>
    fontFamily || theme.typography.text.fontFamily};
  font-size: ${({ fontSize, theme } : ThemedStyledProps<ITextProps, ITheme>) : string =>
    fontSize || theme.typography.text.fontSize};
  font-weight: ${({ fontWeight, theme } : ThemedStyledProps<ITextProps, ITheme>) : number =>
    fontWeight || theme.typography.text.fontWeight};
  font-stretch: normal;
  font-style: normal;
  letter-spacing: ${({ letterSpacing, theme } : ThemedStyledProps<ITextProps, ITheme>) : string =>
    letterSpacing || theme.typography.text.letterSpacing};
  line-height: ${({ lineHeight, theme } : ThemedStyledProps<ITextProps, ITheme>) : string =>
    lineHeight || theme.typography.text.lineHeight};
  margin: 0;
  padding: 0;
  text-align: ${({ textAlign, theme } : ThemedStyledProps<ITextProps, ITheme>) : string =>
    textAlign || theme.typography.text.textAlign};
  text-transform: ${({ textTransform, theme } : ThemedStyledProps<ITextProps, ITheme>) : string =>
    textTransform || theme.typography.text.textTransform};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : ITextProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface ITextProps extends IResponsiveProps {
  /**
   * Color property for Text component
   * @default theme.colors.black
   */
  color? : string;
  /**
   * Font Family property for Text component
   * @default theme.typography.text.fontFamily
   */
  fontFamily? : string;
  /**
   * Font Size property for Text component
   * @default theme.typography.text.fontSize
   */
  fontSize? : string;
  /**
   * Font Weight property for Text component
   * @default theme.typography.text.fontWeight
   */
  fontWeight? : number;
  /**
   * Letter Spacing property for Text component
   * @default theme.typography.text.letterSpacing
   */
  letterSpacing? : string;
  /**
   * Line Height proprty for Text component
   * @default theme.typography.text.letterSpacing
   */
  lineHeight? : string;
  /**
   * Text Align property for Text component
   * @default theme.typography.text.lineHeight
   */
  textAlign? : string;
  /**
   * Text Transform property for Text component
   * @default theme.typography.text.textTransform
   */
  textTransform? : string;
}
