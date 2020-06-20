import { text, optionsKnob as options } from '@storybook/addon-knobs';
import { IIframeProps, SANDBOX_TYPE } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const iframeProps = () : IIframeProps => ({
  desktop: text('desktop', desktop),
  height: text('height', '600px'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  name: text('name', 'iframe'),
  sandbox: options('sandbox', {
    allowForms: SANDBOX_TYPE.ALLOW_FORMS,
    allowPointerLock: SANDBOX_TYPE.ALLOW_POINTER_LOCK,
    allowPopups: SANDBOX_TYPE.ALLOW_POPUPS,
    allowSameOrigin: SANDBOX_TYPE.ALLOW_SAME_ORIGIN,
    allowScripts: SANDBOX_TYPE.ALLOW_SCRIPTS,
    allowTopNavigation: SANDBOX_TYPE.ALLOW_TOP_NAVIGATION,
  }, SANDBOX_TYPE.ALLOW_SCRIPTS, {
    display: 'multi-select',
  }),
  src: text('src', 'http://geekmarketers.xyz'),
  tablet: text('tablet', tablet),
  width: text('width', '800px'),
});
