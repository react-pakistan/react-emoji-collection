import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Iframe } from '../iframe';
import { iframeProps } from '../iframe/props';

describe('Testing Iframe component', () => {
  it('matches Iframe snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Iframe {...iframeProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
