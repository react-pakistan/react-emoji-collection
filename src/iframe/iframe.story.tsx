import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Iframe } from '..';
import { iframeProps } from './props';

export default {
  title: 'Media|Iframe',

  parameters: {
    component: Iframe,
  },
};

export const IframeStory = () : ReactElement => (
  <StyledStory>
    <Iframe {...iframeProps()} />
  </StyledStory>
);
