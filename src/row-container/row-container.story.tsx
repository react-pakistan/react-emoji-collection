import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { RowContainer } from '..';
import { rowContainerProps } from './props';

export default {
  title: 'Layout|RowContainer',

  parameters: {
    component: RowContainer,
  },
};

export const RowContainerStory = () : ReactElement => (
  <StyledStory>
    <RowContainer {...rowContainerProps()}>
      RowContainer Component
    </RowContainer>
  </StyledStory>
);
