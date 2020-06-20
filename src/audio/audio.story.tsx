import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Audio } from '..';
import { audioProps } from './props';

export default {
  title: 'Media|Audio',

  parameters: {
    component: Audio,
  },
};

export const AudioStory = () : ReactElement => (
  <StyledStory>
    <Audio {...audioProps()} />
  </StyledStory>
);
