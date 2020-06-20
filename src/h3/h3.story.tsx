import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { H3 } from '..';
import { h3Props } from './props';

export default {
  title: 'Heading|H3',

  parameters: {
    component: H3,
  },
};

export const H3Story = () : ReactElement => (
  <StyledStory>
    <H3 {...h3Props()}>
      H3 Component
    </H3>
  </StyledStory>
);
