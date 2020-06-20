import { boolean, text } from '@storybook/addon-knobs';
import { IVideoProps } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const videoProps = () : IVideoProps => ({
  autoplay: boolean('autoplay', true),
  controls: boolean('controls', true),
  desktop: text('desktop', desktop),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  loop: boolean('loop', false),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  muted: boolean('muted', false),
  poster: text('poster', 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Elephants_Dream_s8_proog.jpg'),
  preload: text('preload', 'auto'),
  src: text('src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'),
  tablet: text('tablet', tablet),
  width: text('width', '100%'),
});
