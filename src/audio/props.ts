import { boolean, text } from '@storybook/addon-knobs';
import { theme } from '@taimoormk/util-functions';
import { IAudioProps } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const audioProps = () : IAudioProps => ({
  autoplay: boolean('autoplay', true),
  controlPanelColor: text('controlPanelColor', theme.colors.lightGrey),
  controls: boolean('controls', true),
  currentTimeColor: text('currentTimeColor', theme.colors.paleGreen),
  desktop: text('desktop', desktop),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  loop: boolean('loop', false),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  muted: boolean('muted', false),
  preload: text('preload', 'auto'),
  remainingTimeColor: text('remainingTimeColor', theme.colors.cherryRed),
  src: text('src', 'https://notificationsounds.com/sound-effects/insight-578/download/mp3'),
  tablet: text('tablet', tablet),
});
