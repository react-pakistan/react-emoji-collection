import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { ColorInput } from '../color-input';
import { colorInputProps } from '../color-input/props';

describe('Testing ColorInput component', () => {
  it('matches ColorInput snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <ColorInput {...colorInputProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
