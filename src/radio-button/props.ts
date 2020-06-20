import { theme } from '@taimoormk/util-functions';
import { boolean, text } from '@storybook/addon-knobs';
import { IRadioButtonProps } from '..';

export const radioButtonProps = () : IRadioButtonProps => ({
  checked: boolean('checked', true),
  tag: text('tag', 'Label'),
});

export const radioButtonWithLabelProps = () : IRadioButtonProps & any => ({
  checked: boolean('checked', true),
  hasError: boolean('hasError', false),
  helperText: text('helperText', 'There is an error'),
  helperTextColor: text('helperTextColor', theme.colors.cherryRed),
  label: text('label', 'Pick one'),
  tag: text('tag', 'Label'),
});
