import { theme } from '@taimoormk/util-functions';
import { text } from '@storybook/addon-knobs';
import { IAProps } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const aProps = () : IAProps => ({
  color: text('color', theme.colors.black),
  desktop: text('desktop', desktop),
  download: text('download', ''),
  href: text('href', 'https://google.com'),
  hreflang: text('hreflang', ''),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  media: text('media', ''),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  referrerpolicy: text('referrerpolicy', ''),
  rel: text('rel', ''),
  tablet: text('tablet', tablet),
  target: text('target', '_blank'),
  type: text('type', ''),
});
