import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { FileInput } from '../file-input';
import { fileInputProps } from '../file-input/props';

describe('Testing FileInput component', () => {
  it('matches FileInput snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <FileInput {...fileInputProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
