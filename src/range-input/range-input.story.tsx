import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { RangeInput } from '..';
import { rangeInputProps } from './props';

export default {
  title: 'Input|RangeInput',

  parameters: {
    component: RangeInput,
  },
};

export const RangeInputStory = () : ReactElement => (
  <StyledStory>
    <RangeInput {...rangeInputProps()} />
  </StyledStory>
);
