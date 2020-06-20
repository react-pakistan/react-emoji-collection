import { theme } from '@taimoormk/util-functions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { ILiProps, LI_TYPE } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const liProps = () : ILiProps => ({
  desktop: text('desktop', desktop),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  progressBarActiveDotBorder: text('activeDotBorder', theme.colors.seaGreen),
  progressBarActiveDotColor: text('activeDotColor', theme.colors.seaGreen),
  progressBarDotSize: text('progressBarDotSize', '20px'),
  progressBarIsActive: boolean('isActive', true),
  tablet: text('tablet', tablet),
  type: select('type', {
    default: LI_TYPE.DEFAULT,
    progressBar: LI_TYPE.PROGRESS_BAR,
  }, LI_TYPE.DEFAULT),
});
