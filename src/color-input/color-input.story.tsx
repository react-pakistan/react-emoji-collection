import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { ColorInput } from '..';
import { colorInputProps } from './props';

export default {
  title: 'Input|ColorInput',

  parameters: {
    component: ColorInput,
  },
};

export const ColorInputStory = () : ReactElement => (
  <StyledStory>
    <ColorInput {...colorInputProps()} />
  </StyledStory>
);
