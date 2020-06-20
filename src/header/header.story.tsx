import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Header } from '..';

export default {
  title: 'Layout|Header',

  parameters: {
    component: Header,
  },
};

export const HeaderStory = () : ReactElement => (
  <StyledStory>
    <Header>
      Header component
    </Header>
  </StyledStory>
);
