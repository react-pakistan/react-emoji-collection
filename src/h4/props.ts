import { theme } from '@taimoormk/util-functions';
import { text, number } from '@storybook/addon-knobs';
import { IH4Props } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const h4Props = () : IH4Props => ({
  color: text('color', theme.colors.black),
  desktop: text('desktop', desktop),
  fontFamily: text('fontFamily', theme.typography.h4.fontFamily),
  fontSize: text('fontSize', theme.typography.h4.fontSize),
  fontWeight: number('fontWeight', theme.typography.h4.fontWeight),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  letterSpacing: text('letterSpacing', theme.typography.h4.letterSpacing),
  lineHeight: text('lineHeight', theme.typography.h4.lineHeight),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
  textAlign: text('textAlign', theme.typography.h4.textTransform),
  textTransform: text('textTransform', theme.typography.h4.textTransform),
});
