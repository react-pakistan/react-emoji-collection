import { theme } from '@taimoormk/util-functions';
import { text, number } from '@storybook/addon-knobs';
import { IH5Props } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const h5Props = () : IH5Props => ({
  color: text('color', theme.colors.black),
  desktop: text('desktop', desktop),
  fontFamily: text('fontFamily', theme.typography.h5.fontFamily),
  fontSize: text('fontSize', theme.typography.h5.fontSize),
  fontWeight: number('fontWeight', theme.typography.h5.fontWeight),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  letterSpacing: text('letterSpacing', theme.typography.h5.letterSpacing),
  lineHeight: text('lineHeight', theme.typography.h5.lineHeight),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
  textAlign: text('textAlign', theme.typography.h5.textAlign),
  textTransform: text('textTransform', theme.typography.h5.textTransform),
});
