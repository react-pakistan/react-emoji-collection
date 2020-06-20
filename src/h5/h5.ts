import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const H5 = styled.h5<IH5Props>`
  color: ${({ color, theme } : ThemedStyledProps<IH5Props, ITheme>) : string =>
    color || theme.colors.black};
  font-family: ${({ fontFamily, theme } : ThemedStyledProps<IH5Props, ITheme>) : string =>
    fontFamily || theme.typography.h5.fontFamily};
  font-size: ${({ fontSize, theme } : ThemedStyledProps<IH5Props, ITheme>) : string =>
    fontSize || theme.typography.h5.fontSize};
  font-stretch: normal;
  font-style: normal;
  font-weight: ${({ fontWeight, theme } : ThemedStyledProps<IH5Props, ITheme>) : number =>
    fontWeight || theme.typography.h5.fontWeight};
  letter-spacing: ${({ letterSpacing, theme } : ThemedStyledProps<IH5Props, ITheme>) : string =>
    letterSpacing || theme.typography.h5.letterSpacing};
  line-height: ${({ lineHeight, theme } : ThemedStyledProps<IH5Props, ITheme>) : string =>
    lineHeight || theme.typography.h5.lineHeight};
  margin: 0;
  padding: 0;
  text-align: ${({ textAlign, theme } : ThemedStyledProps<IH5Props, ITheme>) : string =>
    textAlign || theme.typography.h5.textAlign};
  text-transform: ${({ textTransform, theme } : ThemedStyledProps<IH5Props, ITheme>) : string =>
    textTransform || theme.typography.h5.textTransform};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IH5Props) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IH5Props extends IResponsiveProps {
  /**
   * Color property for H5 tag
   * @default theme.colors.black
   */
  color? : string;
  /**
   * Font Family property for H5 tag
   * @default theme.typography.h5.fontFamily
   */
  fontFamily? : string;
  /**
   * Font Size property for H5 tag
   * @default theme.typography.h5.fontSize
   */
  fontSize? : string;
  /**
   * Font Weight property for H5 tag
   * @default theme.typography.h5.fontWeight
   */
  fontWeight? : number;
  /**
   * Letter Spacing property for H5 tag
   * @default theme.typography.h5.letterSpacing
   */
  letterSpacing? : string;
  /**
   * Line Height proprty for H5 tag
   * @default theme.typography.h5.lineHeight
   */
  lineHeight? : string;
  /**
   * Text Align property for H5 tag
   * @default theme.typography.h5.textAlign
   */
  textAlign? : string;
  /**
   * Text Transform property for H5 tag
   * @default theme.typography.h5.textTransform
   */
  textTransform? : string;
}
