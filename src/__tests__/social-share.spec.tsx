import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { SocialShare } from '../social-share';
import { socialShareProps } from '../social-share/props';

describe('Testing SocialShare component', () => {
  it('matches SocialShare snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <SocialShare {...socialShareProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
