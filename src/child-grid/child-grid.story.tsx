import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { ChildGrid } from '..';
import { childGridProps } from './props';

export default {
  title: 'Layout|ChildGrid',

  parameters: {
    component: ChildGrid,
  },
};

export const ChildGridStory = () : ReactElement => (
  <StyledStory>
    <ChildGrid {...childGridProps()}>
      ChildGrid Component
    </ChildGrid>
  </StyledStory>
);
