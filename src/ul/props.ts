import { select, text } from '@storybook/addon-knobs';
import { IUlProps, UL_TYPE } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const ulProps = () : IUlProps => ({
  desktop: text('desktop', desktop),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
  type: select('type', {
    default: UL_TYPE.DEFAULT,
    progressBar: UL_TYPE.PROGRESS_BAR,
  }, UL_TYPE.DEFAULT),
});
