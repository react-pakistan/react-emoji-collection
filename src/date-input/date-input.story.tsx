import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { DateInput } from '..';
import { dateInputProps } from './props';

export default {
  title: 'Input|DateInput',

  parameters: {
    component: DateInput,
  },
};

export const DateInputStory = () : ReactElement => (
  <StyledStory>
    <DateInput {...dateInputProps()} />
  </StyledStory>
);
