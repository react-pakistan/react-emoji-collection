import { text, boolean } from '@storybook/addon-knobs';
import { theme } from '@taimoormk/util-functions';
import {
  ITextInputAttrsProps,
  ITextInputProps,
} from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const textInputProps = () : ITextInputAttrsProps & ITextInputProps => ({
  backgroundColor: text('backgroundColor', theme.colors.white),
  border: text('border', `1px solid ${theme.colors.darkGrey}`),
  borderRadius: text('borderRadius', '0.5em'),
  desktop: text('desktop', desktop),
  focusBorder: text('focusBorder', `1px solid ${theme.colors.skyBlue}`),
  focusColor: text('focusColor', theme.colors.cherryRed),
  height: text('height', '3.5em'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  placeholder: text('placeholder', 'Enter your email here'),
  tablet: text('tablet', tablet),
  type: text('inputType', 'text'),
  width: text('width', '100%'),
});

export const textInputWithLabelProps = () : ITextInputAttrsProps & ITextInputProps & any => ({
  backgroundColor: text('backgroundColor', theme.colors.white),
  border: text('border', `1px solid ${theme.colors.darkGrey}`),
  borderRadius: text('borderRadius', '0.5em'),
  desktop: text('desktop', desktop),
  focusBorder: text('focusBorder', `1px solid ${theme.colors.skyBlue}`),
  focusColor: text('focusColor', theme.colors.cherryRed),
  hasError: boolean('hasError', false),
  height: text('height', '3.5em'),
  helperText: text('helperText', 'There is an error'),
  helperTextColor: text('helperTextColor', theme.colors.cherryRed),
  label: text('label', 'Email'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  placeholder: text('placeholder', 'Enter your email here'),
  tablet: text('tablet', tablet),
  type: text('inputType', 'text'),
  width: text('width', '100%'),
});
