import { text, boolean, number } from '@storybook/addon-knobs';
import { theme } from '@taimoormk/util-functions';
import { ISelectProps, IOptionProps } from '..';

export const optionProps : Array<IOptionProps> = [
  {
    disabled: false,
    id: 'option-1',
    label: 'Volvo',
    selected: false,
    value: 'volvo',
  },
  {
    disabled: true,
    id: 'option-2',
    label: 'Saab',
    selected: false,
    value: 'saab',
  },
  {
    disabled: false,
    id: 'option-3',
    label: 'Mercedes',
    selected: false,
    value: 'mercedes',
  },
  {
    disabled: false,
    id: 'option-4',
    label: 'Audi',
    selected: false,
    value: 'audi',
  },
];

export const selectProps = () : ISelectProps => ({
  autoFocus: boolean('autoFocus', false),
  disabled: boolean('disabled', false),
  form: text('form', 'form_id'),
  multiple: boolean('multiple', false),
  name: text('name', 'dropDownName'),
  required: boolean('required', false),
  size: number('size', 0),
});

export const selectWithLabelProps = () : ISelectProps & any => ({
  autoFocus: boolean('autoFocus', false),
  disabled: boolean('disabled', false),
  form: text('form', 'form_id'),
  hasError: boolean('hasError', false),
  helperText: text('helperText', 'There is an error'),
  helperTextColor: text('helperTextColor', theme.colors.cherryRed),
  label: text('label', 'Email'),
  multiple: boolean('multiple', false),
  name: text('name', 'dropDownName'),
  required: boolean('required', false),
  size: number('size', 0),
});
