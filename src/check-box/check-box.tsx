import { IResponsiveProps } from '@taimoormk/util-functions';
import React, { ReactElement, ReactNode } from 'react';
import { CheckBoxContainer, HideNativeCheckbox, StyledCheckbox, Check } from './styled';
import { withFieldLabel } from '../hoc/field-label';

export const CheckBox = ({
  check,
  checkedColor,
  isChecked,
  onChange,
  unCheckedColor,
  ...rest
} : ICheckBoxProps) : ReactElement => (
  <CheckBoxContainer
    onClick={onChange}
    {...rest}
  >
    <HideNativeCheckbox />
    <StyledCheckbox
      checkedColor={checkedColor}
      isChecked={isChecked}
      unCheckedColor={unCheckedColor}
    >
      {check && isChecked ? check : (
        <Check viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Check>
      )}
    </StyledCheckbox>
  </CheckBoxContainer>
);

export const CheckBoxWithFieldLabel = withFieldLabel(CheckBox);

export interface ICheckBoxProps extends IResponsiveProps {
  /**
   * Custom check sign for Checkbox component
   */
  check? : ReactNode;
  /**
   * Background Color when its checked state
   * @default theme.colors.skyBlue
   */
  checkedColor? : string;
  /**
   * Specifies if checkbox is checked or not
   */
  isChecked : boolean;
  /**
   * Handle change to toggle checkbox states
   */
  onChange : () => void;
  /**
   * Background Color when its unchecked state
   * @default theme.colors.lighterBlack
   */
  unCheckedColor? : string;
}
