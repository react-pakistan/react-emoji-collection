import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { TimeInput } from '../time-input';
import { timeInputProps } from '../time-input/props';

describe('Testing TimeInput component', () => {
  it('matches TimeInput snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <TimeInput {...timeInputProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
