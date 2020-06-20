import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Wrapper } from '../wrapper';
import { wrapperProps } from '../wrapper/props';

describe('Testing Wrapper component', () => {
  it('matches Wrapper snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Wrapper {...wrapperProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
