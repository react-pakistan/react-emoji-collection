import { IResponsiveProps } from '@taimoormk/util-functions';
import React, { ReactElement } from 'react';
import { Spacer } from '../spacer';
import { Text } from '../text';
import { withFieldLabel } from '../hoc/field-label';
import { RadioButtonWrapper, StyledCheckBox } from './styled';

export const RadioButton = ({
  checked,
  tag,
} : IRadioButtonProps) : ReactElement => (
  <RadioButtonWrapper>
    <StyledCheckBox checked={checked} />
    <Spacer margin="0 0 0 0.5em" />
    <Text>{tag}</Text>
  </RadioButtonWrapper>
);

export const RadioButtonWithFieldLabel = withFieldLabel(RadioButton);

export interface IRadioButtonProps extends IResponsiveProps {
  /**
   * Specifies if Radio button is selected or not
   * @default false
   */
  checked : boolean;
  /**
   * Specifies if there is an error
   * @default false
   */
  hasError? : boolean;
  /**
   * Specifies the label for Radio button
   */
  label? : string;
  /**
   * Label tag field for Radio button
   */
  tag : string;
}
