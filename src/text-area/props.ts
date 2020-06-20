import { text, number, boolean, select } from '@storybook/addon-knobs';
import { theme } from '@taimoormk/util-functions';
import { ITextAreaProps, WRAP_TYPE, ITextAreaAttrsProps } from '..';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';


export const textAreaProps = () : ITextAreaAttrsProps & ITextAreaProps => ({
  autoFocus: boolean('autoFocus', false),
  backgroundColor: text('backgroundColor', theme.colors.white),
  border: text('borderColor', `1px solid ${theme.colors.darkGrey}`),
  borderRadius: text('borderRadius', '0.5em'),
  color: text('color', theme.colors.black),
  cols: number('cols', 20),
  desktop: text('desktop', desktop),
  disabled: boolean('disabled', false),
  fontFamily: text('fontFamily', theme.typography.text.fontFamily),
  fontSize: text('fontSize', theme.typography.text.fontSize),
  fontWeight: number('fontWeight', theme.typography.text.fontWeight),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  letterSpacing: text('letterSpacing', theme.typography.text.letterSpacing),
  lineHeight: text('lineHeight', theme.typography.text.lineHeight),
  maxLength: number('maxLength', 300),
  minLength: number('minLength', 10),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  outlineColor: text('outlineColor', theme.colors.skyBlue),
  placeholder: text('placeholder', 'Enter message here'),
  placeholderColor: text('placeholderColor', theme.colors.lightBlack),
  readOnly: boolean('readOnly', false),
  required: boolean('required', false),
  rows: number('rows', 12),
  tablet: text('tablet', tablet),
  wrap: select('wrap', {
    hard: WRAP_TYPE.HARD,
    soft: WRAP_TYPE.SOFT,
  }, WRAP_TYPE.HARD),
});

export const textAreaWithLabelProps = () : ITextAreaAttrsProps & ITextAreaProps & any => ({
  autoFocus: boolean('autoFocus', false),
  backgroundColor: text('backgroundColor', theme.colors.white),
  border: text('borderColor', `1px solid ${theme.colors.darkGrey}`),
  borderRadius: text('borderRadius', '0.5em'),
  color: text('color', theme.colors.black),
  cols: number('cols', 20),
  desktop: text('desktop', desktop),
  disabled: boolean('disabled', false),
  fontFamily: text('fontFamily', theme.typography.text.fontFamily),
  fontSize: text('fontSize', theme.typography.text.fontSize),
  fontWeight: number('fontWeight', theme.typography.text.fontWeight),
  hasError: boolean('hasError', false),
  helperText: text('helperText', 'There is an error'),
  helperTextColor: text('helperTextColor', theme.colors.cherryRed),
  label: text('label', 'Address'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  letterSpacing: text('letterSpacing', theme.typography.text.letterSpacing),
  lineHeight: text('lineHeight', theme.typography.text.lineHeight),
  maxLength: number('maxLength', 300),
  minLength: number('minLength', 10),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  outlineColor: text('outlineColor', theme.colors.skyBlue),
  placeholder: text('placeholder', 'Enter message here'),
  placeholderColor: text('placeholderColor', theme.colors.lightBlack),
  readOnly: boolean('readOnly', false),
  required: boolean('required', false),
  rows: number('rows', 12),
  tablet: text('tablet', tablet),
  wrap: select('wrap', {
    hard: WRAP_TYPE.HARD,
    soft: WRAP_TYPE.SOFT,
  }, WRAP_TYPE.HARD),
});
