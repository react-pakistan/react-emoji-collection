import styled from 'styled-components';

export const Option = styled.option.attrs<IOptionProps>({
  disabled: (props : IOptionProps) : boolean => props.disabled || false,
  label: (props : IOptionProps) : string => props.label,
  selected: (props : IOptionProps) : boolean => props.selected || false,
  value: (props : IOptionProps) : string => props.value,
})``;

export interface IOptionProps {
  /**
   * Specifies that an option should be disabled
   * @default false
   */
  disabled? : boolean;
  /**
   * Specifies the id of the option
   */
  id : string;
  /**
   * Specifies a shorter label for an option
   */
  label : string;
  /**
   * Specifies that an option should be pre-selected when the page loads
   * @default false
   */
  selected? : boolean;
  /**
   * Specifies the value to be sent to a server
   */
  value : string;
}
