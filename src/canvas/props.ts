import { text } from '@storybook/addon-knobs';
import {
  ICanvasAttrsProps,
  ICanvasProps,
} from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const canvasProps = () : ICanvasAttrsProps & ICanvasProps => ({
  border: text('border', '1px solid #000000'),
  desktop: text('desktop', desktop),
  height: text('height', '400px'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  id: text('id', 'canvasId'),
  tablet: text('tablet', tablet),
  width: text('width', '600px'),
});
