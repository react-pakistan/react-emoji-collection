import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { ProgressBar } from '..';
import { progressBarProps } from './props';

export default {
  title: 'Media|ProgressBar',

  parameters: {
    component: ProgressBar,
  },
};

export const ProgressBarStory = () : ReactElement => (
  <StyledStory>
    <ProgressBar {...progressBarProps()} />
  </StyledStory>
);
