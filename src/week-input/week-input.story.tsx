import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { WeekInput } from '..';
import { weekInputProps } from './props';

export default {
  title: 'Input|WeekInput',

  parameters: {
    component: WeekInput,
  },
};

export const WeekInputStory = () : ReactElement => (
  <StyledStory>
    <WeekInput {...weekInputProps()} />
  </StyledStory>
);
