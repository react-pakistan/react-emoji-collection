import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const BackgroundImage = styled.div<IBackgroundImageProps>`
  margin: ${({ imageBackgroundMargin } : IBackgroundImageProps) : string =>
    imageBackgroundMargin || '0'};
  padding: ${({ imageBackgroundPadding } : IBackgroundImageProps) : string =>
    imageBackgroundPadding || '0'};
  width: ${({ imageBackgroundWidth } : IBackgroundImageProps) : string =>
    imageBackgroundWidth || '600px'};
  height: ${({ imageBackgroundHeight } : IBackgroundImageProps) : string =>
    imageBackgroundHeight || '400px'};
  background-color: ${({ imageBackgroundColor, theme } : ThemedStyledProps<IBackgroundImageProps, ITheme>) : string =>
    imageBackgroundColor || theme.colors.lightGrey};
  background-image: ${({ imageBackgroundUrl } : IBackgroundImageProps) : string =>
    `url(${imageBackgroundUrl})`};
  background-repeat: ${({ imageBackgroundRepeat } : IBackgroundImageProps) : string =>
    imageBackgroundRepeat || 'no-repeat'};
  background-position: ${({ imageBackgroundPosition } : IBackgroundImageProps) : string =>
    imageBackgroundPosition || 'center center'};
  background-size: ${({ imageBackgroundSize } : IBackgroundImageProps) : string =>
    imageBackgroundSize || 'cover'};
  border-radius: ${({ imageBorderRadius } : IBackgroundImageProps) : string => imageBorderRadius || '0'};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IBackgroundImageProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IBackgroundImageProps extends IResponsiveProps {
  /**
   * Background Color property for Background Image component
   * @default ''
   */
  imageBackgroundColor? : string;
  /**
   * Background Color property for Background Image component
   * @default 400px
   */
  imageBackgroundHeight? : string;
  /**
   * Background Color property for Background Image component
   * @default 0
   */
  imageBackgroundMargin? : string;
  /**
   * Background Color property for Background Image component
   * @default 0
   */
  imageBackgroundPadding? : string;
  /**
   * Background Repeat property for Background Image component
   * @default center center
   */
  imageBackgroundPosition? : string;
  /**
   * Border Radius property for Background Image component
   * @default 0
   */
  imageBorderRadius? : string;
  /**
   * Background Repeat property for Background Image component
   * @default no-repeat
   */
  imageBackgroundRepeat? : string;
  /**
   * Background Position property for Menu Item component
   * @default cover
   */
  imageBackgroundSize? : string;
  /**
   * Background Color property for Background Image component
   * @default 600px
   */
  imageBackgroundWidth? : string;
  /**
   * Background Url property for Background Image component
   * @default ''
   */
  imageBackgroundUrl : string;
}
