import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { MonthInput } from '..';
import { monthInputProps } from './props';

export default {
  title: 'Input|MonthInput',

  parameters: {
    component: MonthInput,
  },
};

export const MonthInputStory = () : ReactElement => (
  <StyledStory>
    <MonthInput {...monthInputProps()} />
  </StyledStory>
);
