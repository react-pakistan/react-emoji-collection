import React from 'react';
import { StyledStory } from '../styled-app';
import { Spacer } from '..';
import { spacerProps } from './props';

export default {
  title: 'Layout|Spacer',

  parameters: {
    component: Spacer,
  },
};

export const SpacerStory = () : React.ReactElement => (
  <StyledStory>
    <Spacer {...spacerProps()} />
  </StyledStory>
);
