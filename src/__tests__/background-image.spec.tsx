import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { BackgroundImage } from '../background-image';
import { backgroundImageProps } from '../background-image/props';

describe('Testing BackgroundImage component', () => {
  it('matches BackgroundImage snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <BackgroundImage {...backgroundImageProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
