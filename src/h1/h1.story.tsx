import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { H1 } from '..';
import { h1Props } from './props';

export default {
  title: 'Heading|H1',

  parameters: {
    component: H1,
  },
};

export const H1Story = () : ReactElement => (
  <StyledStory>
    <H1 {...h1Props()}>
      H1 Component
    </H1>
  </StyledStory>
);
