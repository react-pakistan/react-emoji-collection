import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Li } from '..';
import { liProps } from './props';

export default {
  title: 'Misc|Li',

  parameters: {
    component: Li,
  },
};

export const LiStory = () : ReactElement => (
  <StyledStory>
    <Li {...liProps()} />
  </StyledStory>
);
