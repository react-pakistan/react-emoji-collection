import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Image } from '..';
import { imageProps } from './props';

export default {
  title: 'Media|Image',

  parameters: {
    component: Image,
  },
};

export const ImageStory = () : ReactElement => (
  <StyledStory>
    <Image {...imageProps()} />
  </StyledStory>
);
