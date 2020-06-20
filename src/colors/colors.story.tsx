import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Colors } from '..';
import { colorsProps } from './props';

export default {
  title: 'StyleGuide|Colors',

  parameters: {
    component: Colors,
  },
};

export const ColorsStory = () : ReactElement => (
  <StyledStory>
    <Colors {...colorsProps()} />
  </StyledStory>
);
