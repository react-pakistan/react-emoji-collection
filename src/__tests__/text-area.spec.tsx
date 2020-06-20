import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { TextArea, TextAreaWithFieldLabel } from '../text-area';
import { textAreaProps, textAreaWithLabelProps } from '../text-area/props';

describe('Testing TextArea component', () => {
  it('matches TextArea snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <TextArea {...textAreaProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('matches TextAreaWithFieldLabel snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <TextAreaWithFieldLabel {...textAreaWithLabelProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
