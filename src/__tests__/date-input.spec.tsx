import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { DateInput } from '../date-input';
import { dateInputProps } from '../date-input/props';

describe('Testing DateInput component', () => {
  it('matches DateInput snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <DateInput {...dateInputProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
