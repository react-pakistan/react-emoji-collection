import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { H5 } from '..';
import { h5Props } from './props';

export default {
  title: 'Heading|H5',

  parameters: {
    component: H5,
  },
};

export const H5Story = () : ReactElement => (
  <StyledStory>
    <H5 {...h5Props()}>
      H5 Component
    </H5>
  </StyledStory>
);
