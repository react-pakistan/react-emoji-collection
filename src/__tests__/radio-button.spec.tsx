import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { RadioButton } from '../radio-button';
import { radioButtonProps } from '../radio-button/props';

describe('Testing RadioButton component', () => {
  it('matches RadioButton snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <RadioButton {...radioButtonProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
