import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const Image = styled.img.attrs<IImageAttrsProps>(({
  alt,
  src,
} : IImageAttrsProps) : IImageAttrsProps => ({
  alt,
  src,
}))<IImageProps>`
  height: ${({ height } : ThemedStyledProps<IImageProps, ITheme>) : string =>
    height || '400px'};
  margin: ${({ margin } : ThemedStyledProps<IImageProps, ITheme>) : string =>
    margin || '0'};
  padding: ${({ padding } : ThemedStyledProps<IImageProps, ITheme>) : string =>
    padding || '0'};
  width: ${({ width } : ThemedStyledProps<IImageProps, ITheme>) : string =>
    width || '600px'};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IImageProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IImageAttrsProps {
  /**
   * Alt property for Image component
   */
  alt : string;
  /**
   * Image Url property for Image component
   */
  src : string;
}

export interface IImageProps extends IResponsiveProps {
  /**
   * Height property for Image component
   * @default 400px
   */
  height? : string;
  /**
   * Margin property for Image component
   * @default 0
   */
  margin? : string;
  /**
   * Padding property for Image component
   * @default 0
   */
  padding? : string;
  /**
   * Width property for Image component
   * @default 600px
   */
  width? : string;
}
