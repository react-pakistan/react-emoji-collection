import { text } from '@storybook/addon-knobs';
import { theme } from '@taimoormk/util-functions';
import {
  IProgressBarAttrsProps,
  IProgressBarProps,
} from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const progressBarProps = () : IProgressBarAttrsProps & IProgressBarProps => ({
  backgroundColorBar: text('backgroundColorBar', theme.colors.cherryRed),
  backgroundColorValue: text('backgroundColorValue', theme.colors.limeYellow),
  desktop: text('desktop', desktop),
  height: text('height', '0.25em'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  max: text('max', '100'),
  min: text('min', '0'),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
  transition: text('transition', '2.5s ease-out'),
  value: text('value', '20'),
  width: text('width', '100%'),
});
