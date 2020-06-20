import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { MonthInput } from '../month-input';
import { monthInputProps } from '../month-input/props';

describe('Testing MonthInput component', () => {
  it('matches MonthInput snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <MonthInput {...monthInputProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
