import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { TextInput, TextInputWithFieldLabel } from '../text-input';
import { textInputProps, textInputWithLabelProps } from '../text-input/props';

describe('Testing TextInput component', () => {
  it('matches TextInput snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <TextInput {...textInputProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('matches TextInputWithFieldLabel snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <TextInputWithFieldLabel {...textInputWithLabelProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
