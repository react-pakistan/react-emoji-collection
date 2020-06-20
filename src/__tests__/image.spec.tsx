import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Image } from '../image';
import { imageProps } from '../image/props';

describe('Testing Image component', () => {
  it('matches Image snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Image {...imageProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
