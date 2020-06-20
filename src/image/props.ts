import { text } from '@storybook/addon-knobs';
import {
  IImageAttrsProps,
  IImageProps,
} from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const imageProps = () : IImageAttrsProps & IImageProps => ({
  alt: text('alt', 'alt-image'),
  desktop: text('desktop', desktop),
  height: text('height', 'auto'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  margin: text('margin', '0'),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  padding: text('padding', '0'),
  src: text('imageUrl', 'https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'),
  tablet: text('tablet', tablet),
  width: text('width', '600px'),
});
