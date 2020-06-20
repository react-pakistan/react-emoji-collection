import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { theme } from '@taimoormk/util-functions';
import {
  BUTTON_FORM_ENCTYPE,
  BUTTON_FORM_METHODS,
  BUTTON_FORM_TARGET,
  BUTTON_TYPE,
  IButtonAttrsProps,
  IButtonProps,
} from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const buttonProps = () : IButtonAttrsProps & IButtonProps => ({
  autoFocus: boolean('autoFocus', true),
  border: text('border', `1px solid ${theme.colors.darkGrey}`),
  borderRadius: text('borderRadius', '0.5em'),
  backgroundColor: text('backgroundColor', theme.colors.white),
  desktop: text('desktop', desktop),
  disabled: boolean('disabled', false),
  form: text('form', ''),
  formaction: text('formaction', ''),
  formenctype: select('formenctype', {
    application: BUTTON_FORM_ENCTYPE.APPLICATION,
    multipart: BUTTON_FORM_ENCTYPE.MULTIPART,
    text: BUTTON_FORM_ENCTYPE.TEXT,
  }, BUTTON_FORM_ENCTYPE.TEXT),
  formmethod: select('formmethod', {
    get: BUTTON_FORM_METHODS.GET,
    post: BUTTON_FORM_METHODS.POST,
  }, BUTTON_FORM_METHODS.GET),
  formnovalidate: boolean('formnovalidate', false),
  formtarget: select('formtarget', {
    blank: BUTTON_FORM_TARGET.BLANK,
    parent: BUTTON_FORM_TARGET.PARENT,
    self: BUTTON_FORM_TARGET.SELF,
    top: BUTTON_FORM_TARGET.TOP,
  }, BUTTON_FORM_TARGET.SELF),
  height: text('height', 'auto'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  name: text('name', ''),
  onClick: action('button clicked'),
  padding: text('padding', '1em'),
  tablet: text('tablet', tablet),
  type: select('type', {
    button: BUTTON_TYPE.BUTTON,
    reset: BUTTON_TYPE.RESET,
    submit: BUTTON_TYPE.SUBMIT,
  }, BUTTON_TYPE.BUTTON),
  value: text('value', ''),
  width: text('width', 'auto'),
});
