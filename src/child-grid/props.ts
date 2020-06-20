import { number, text } from '@storybook/addon-knobs';
import { IChildGridProps } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const childGridProps = () : IChildGridProps => ({
  alignSelf: text('alignSelf', 'center'),
  desktop: text('desktop', desktop),
  gridColumnEnd: number('gridColumnEnd', 1),
  gridColumnStart: number('gridColumnStart', 1),
  gridRowEnd: number('gridRowEnd', 1),
  gridRowStart: number('gridRowStart', 1),
  justifySelf: text('justifySelf', 'center'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
});
