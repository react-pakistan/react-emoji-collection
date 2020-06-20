import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { WeekInput } from '../week-input';
import { weekInputProps } from '../week-input/props';

describe('Testing WeekInput component', () => {
  it('matches WeekInput snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <WeekInput {...weekInputProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
