import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Text } from '..';
import { textProps } from './props';

export default {
  title: 'Misc|Text',

  parameters: {
    component: Text,
  },
};

export const TextStory = () : ReactElement => (
  <StyledStory>
    <Text {...textProps()}>
      Text Component
    </Text>
  </StyledStory>
);
