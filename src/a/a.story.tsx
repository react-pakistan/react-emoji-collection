import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { A } from '..';
import { aProps } from './props';

export default {
  title: 'Link|A',

  parameters: {
    component: A,
  },
};

export const AStory = () : ReactElement => (
  <StyledStory>
    <A {...aProps()}>
      Go to Google
    </A>
  </StyledStory>
);
