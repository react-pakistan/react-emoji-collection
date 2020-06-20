import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { H4 } from '..';
import { h4Props } from './props';

export default {
  title: 'Heading|H4',

  parameters: {
    component: H4,
  },
};

export const H4Story = () : ReactElement => (
  <StyledStory>
    <H4 {...h4Props()}>
      H4 Component
    </H4>
  </StyledStory>
);
