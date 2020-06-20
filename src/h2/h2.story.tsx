import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { H2 } from '..';
import { h2Props } from './props';

export default {
  title: 'Heading|H2',

  parameters: {
    component: H2,
  },
};

export const H2Story = () : ReactElement => (
  <StyledStory>
    <H2 {...h2Props()}>
      H2 Component
    </H2>
  </StyledStory>
);
