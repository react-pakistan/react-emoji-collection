import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { TimeInput } from '..';
import { timeInputProps } from './props';

export default {
  title: 'Input|TimeInput',

  parameters: {
    component: TimeInput,
  },
};

export const TimeInputStory = () : ReactElement => (
  <StyledStory>
    <TimeInput {...timeInputProps()} />
  </StyledStory>
);
