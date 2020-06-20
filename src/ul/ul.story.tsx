import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Ul } from '..';
import { ulProps } from './props';

export default {
  title: 'Misc|Ul',

  parameters: {
    component: Ul,
  },
};

export const UlStory = () : ReactElement => (
  <StyledStory>
    <Ul {...ulProps()} />
  </StyledStory>
);
