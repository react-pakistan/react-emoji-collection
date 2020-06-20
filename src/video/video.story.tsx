import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Video } from '..';
import { videoProps } from './props';

export default {
  title: 'Media|Video',

  parameters: {
    component: Video,
  },
};

export const VideoStory = () : ReactElement => (
  <StyledStory>
    <Video {...videoProps()} />
  </StyledStory>
);
