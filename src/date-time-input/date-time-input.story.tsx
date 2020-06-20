import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { DateTimeInput } from '..';
import { dateTimeInputProps } from './props';

export default {
  title: 'Input|DateTimeInput',

  parameters: {
    component: DateTimeInput,
  },
};

export const DateTimeInputStory = () : ReactElement => (
  <StyledStory>
    <DateTimeInput {...dateTimeInputProps()} />
  </StyledStory>
);
