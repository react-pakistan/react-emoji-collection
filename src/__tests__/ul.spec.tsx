import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Ul } from '../ul';
import { ulProps } from '../ul/props';

describe('Testing Ul component', () => {
  it('matches Ul snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Ul {...ulProps()}/>
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
