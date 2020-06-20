import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { BackgroundImage } from '..';
import { backgroundImageProps } from './props';

export default {
  title: 'Media|BackgroundImage',

  parameters: {
    component: BackgroundImage,
  },
};

export const BackgroundImageStory = () : ReactElement => (
  <StyledStory>
    <BackgroundImage {...backgroundImageProps()} />
  </StyledStory>
);
