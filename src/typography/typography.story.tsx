import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Typography } from '..';
import { typographyProps } from './props';

export default {
  title: 'StyleGuide|Typography',

  parameters: {
    component: Typography,
  },
};

export const TypographyStory = () : ReactElement => (
  <StyledStory>
    <Typography {...typographyProps()}>
      Typography Component
    </Typography>
  </StyledStory>
);
