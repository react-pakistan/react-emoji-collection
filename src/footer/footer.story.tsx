import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Footer } from '..';
import { footerProps } from './props';

export default {
  title: 'Layout|Footer',

  parameters: {
    component: Footer,
  },
};

export const FooterStory = () : ReactElement => (
  <StyledStory>
    <Footer {...footerProps()}>
      Footer component
    </Footer>
  </StyledStory>
);
