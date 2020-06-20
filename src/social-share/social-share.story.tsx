import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { SocialShare } from '..';
import { socialShareProps } from './props';

export default {
  title: 'Misc|SocialShare',

  parameters: {
    component: SocialShare,
  },
};

export const SocialShareStory = () : ReactElement => (
  <StyledStory>
    <SocialShare {...socialShareProps()} />
  </StyledStory>
);
