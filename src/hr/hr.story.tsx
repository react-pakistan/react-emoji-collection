import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { HR } from '..';
import { hrProps } from './props';

export default {
  title: 'Misc|HR',

  parameters: {
    component: HR,
  },
};

export const HRStory = () : ReactElement => (
  <StyledStory>
    <HR {...hrProps()} />
  </StyledStory>
);
