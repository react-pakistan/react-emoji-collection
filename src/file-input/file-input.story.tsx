import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { FileInput } from '..';
import { fileInputProps } from './props';

export default {
  title: 'Input|FileInput',

  parameters: {
    component: FileInput,
  },
};

export const FileInputStory = () : ReactElement => (
  <StyledStory>
    <FileInput {...fileInputProps()} />
  </StyledStory>
);
