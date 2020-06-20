import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Li } from '../li';
import { liProps } from '../li/props';

describe('Testing Li component', () => {
  it('matches Li snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Li {...liProps()}/>
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
