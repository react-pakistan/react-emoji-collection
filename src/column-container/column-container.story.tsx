import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { ColumnContainer } from '..';
import { columnContainerProps } from './props';

export default {
  title: 'Layout|ColumnContainer',

  parameters: {
    component: ColumnContainer,
  },
};

export const ColumnContainerStory = () : ReactElement => (
  <StyledStory>
    <ColumnContainer {...columnContainerProps()}>
      ColumnContainer Component
    </ColumnContainer>
  </StyledStory>
);
