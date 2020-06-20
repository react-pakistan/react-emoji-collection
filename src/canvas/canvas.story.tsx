import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Canvas } from '..';
import { canvasProps } from './props';

export default {
  title: 'Media|Canvas',

  parameters: {
    component: Canvas,
  },
};

export const CanvasStory = () : ReactElement => (
  <StyledStory>
    <Canvas {...canvasProps()} />
  </StyledStory>
);
