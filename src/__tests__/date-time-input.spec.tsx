import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { DateTimeInput } from '../date-time-input';
import { dateTimeInputProps } from '../date-time-input/props';

describe('Testing DateTimeInput component', () => {
  it('matches DateTimeInput snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <DateTimeInput {...dateTimeInputProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
