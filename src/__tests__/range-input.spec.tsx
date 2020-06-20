import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { RangeInput } from '../range-input';
import { rangeInputProps } from '../range-input/props';

describe('Testing RangeInput component', () => {
  it('matches RangeInput snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <RangeInput {...rangeInputProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
