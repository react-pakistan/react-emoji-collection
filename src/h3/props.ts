import { theme } from '@taimoormk/util-functions';
import { text, number } from '@storybook/addon-knobs';
import { IH3Props } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const h3Props = () : IH3Props => ({
  color: text('color', theme.colors.black),
  desktop: text('desktop', desktop),
  fontFamily: text('fontFamily', theme.typography.h3.fontFamily),
  fontSize: text('fontSize', theme.typography.h3.fontSize),
  fontWeight: number('fontWeight', theme.typography.h3.fontWeight),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  letterSpacing: text('letterSpacing', theme.typography.h3.letterSpacing),
  lineHeight: text('lineHeight', theme.typography.h3.lineHeight),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
  textAlign: text('textAlign', theme.typography.h3.textAlign),
  textTransform: text('textTransform', theme.typography.h3.textTransform),
});
