import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Wrapper } from '..';
import { wrapperProps } from './props';

export default {
  title: 'Layout|Wrapper',

  parameters: {
    component: Wrapper,
  },
};

export const WrapperStory = () : ReactElement => (
  <StyledStory>
    <Wrapper {...wrapperProps()}>
      Wrapper Component
    </Wrapper>
  </StyledStory>
);
