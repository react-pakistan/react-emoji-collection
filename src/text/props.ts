import { theme } from '@taimoormk/util-functions';
import { text, number } from '@storybook/addon-knobs';
import { ITextProps } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const textProps = () : ITextProps => ({
  color: text('color', theme.colors.black),
  desktop: text('desktop', desktop),
  fontFamily: text('fontFamily', theme.typography.text.fontFamily),
  fontSize: text('fontSize', theme.typography.text.fontSize),
  fontWeight: number('fontWeight', theme.typography.text.fontWeight),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  letterSpacing: text('letterSpacing', theme.typography.text.letterSpacing),
  lineHeight: text('lineHeight', theme.typography.text.lineHeight),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
  textAlign: text('textAlign', theme.typography.text.textAlign),
  textTransform: text('textTransform', theme.typography.text.textTransform),
});
