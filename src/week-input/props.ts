import { text } from '@storybook/addon-knobs';
import { IWeekInputProps } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const weekInputProps = () : IWeekInputProps => ({
  desktop: text('desktop', desktop),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
});
