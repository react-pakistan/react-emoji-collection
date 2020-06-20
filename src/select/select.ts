import { IResponsiveProps } from '@taimoormk/util-functions';
import styled from 'styled-components';
import { withFieldLabel } from '../hoc/field-label';

export const Select = styled.select.attrs<ISelectProps>(({
  autoFocus,
  disabled,
  form,
  multiple,
  name,
  required,
  size,
} : ISelectProps) : ISelectProps => ({
  autoFocus: autoFocus || false,
  disabled: disabled || false,
  form: form || '',
  multiple: multiple || false,
  name: name || '',
  required,
  size: size || 0,
}))``;

export const SelectWithFieldLabel = withFieldLabel(Select);

export interface ISelectProps extends IResponsiveProps {
  /**
   * Specifies that the drop-down list should automatically get focus when the page loads
   * @default false
   */
  autoFocus? : boolean;
  /**
   * Specifies that a drop-down list should be disabled
   * @default false
   */
  disabled? : boolean;
  /**
   * Defines one or more forms the select field belongs to
   * @default ''
   */
  form? : string;
  /**
   * Specifies if there is an error
   * @default false
   */
  hasError? : boolean;
  /**
   * Specifies that multiple options can be selected at once
   * @default false
   */
  multiple? : boolean;
  /**
   * Defines a name for the drop-down list
   * @default ''
   */
  name? : string;
  /**
   * Specifies that the user is required to select a value before submitting the form
   */
  required : boolean;
  /**
   * Defines the number of visible options in a drop-down list
   * @default 0
   */
  size? : number;
}
