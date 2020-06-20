import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { RadioButton, RadioButtonWithFieldLabel } from '..';
import { radioButtonProps, radioButtonWithLabelProps } from './props';

export default {
  title: 'Input|RadioButton',

  parameters: {
    component: RadioButton,
  },
};

export const RadioButtonStory = () : ReactElement => (
  <StyledStory>
    <RadioButton {...radioButtonProps()} />
  </StyledStory>
);

export const RadioButtonWithLabelStory = () : ReactElement => (
  <StyledStory>
    <RadioButtonWithFieldLabel
      {...radioButtonWithLabelProps()}
    />
  </StyledStory>
);
