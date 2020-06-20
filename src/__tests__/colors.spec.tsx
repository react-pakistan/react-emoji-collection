import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Colors } from '../colors';
import { colorsProps } from '../colors/props';

describe('Testing Colors component', () => {
  it('matches Colors snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Colors {...colorsProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
