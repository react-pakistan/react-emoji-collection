import { text } from '@storybook/addon-knobs';
import { IBackgroundImageProps } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const backgroundImageProps = () : IBackgroundImageProps => ({
  desktop: text('desktop', desktop),
  imageBackgroundColor: text('imageBackgroundColor', '#6C6C6C'),
  imageBackgroundHeight: text('imageBackgroundHeight', '400px'),
  imageBackgroundMargin: text('imageBackgroundMargin', '0'),
  imageBackgroundPadding: text('imageBackgroundPadding', '0'),
  imageBackgroundPosition: text('imageBackgroundPosition', 'center center'),
  imageBackgroundRepeat: text('imageBackgroundRepeat', 'no-repeat'),
  imageBackgroundSize: text('imageBackgroundSize', 'cover'),
  imageBackgroundWidth: text('imageBackgroundWidth', '600px'),
  imageBorderRadius: text('imageBorderRadius', '0'),
  imageBackgroundUrl: text(
    'imageBackgroundUrl',
    'https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
  ),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
});
