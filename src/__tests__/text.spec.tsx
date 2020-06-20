import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Text } from '../text';
import { textProps } from '../text/props';

describe('Testing Text component', () => {
  it('matches Text snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Text {...textProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
