import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Button } from '..';
import { buttonProps } from './props';

export default {
  title: 'Form|Button',

  parameters: {
    component: Button,
  },
};

export const ButtonStory = () : ReactElement => (
  <StyledStory>
    <Button {...buttonProps()}>
      Hello World
    </Button>
  </StyledStory>
);
