import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Spacer } from '../spacer';
import { spacerProps } from '../spacer/props';

describe('Testing Spacer component', () => {
  it('matches Spacer snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Spacer {...spacerProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
