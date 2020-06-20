import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { CheckBox, CheckBoxWithFieldLabel } from '../check-box';
import { checkBoxProps, checkBoxWithLabelProps } from '../check-box/props';

describe('Testing CheckBox component', () => {
  it('matches CheckBox snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <CheckBox
          isChecked
          onChange={() => null}
          {...checkBoxProps()}
        />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('matches CheckBoxWithFieldLabel snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <CheckBoxWithFieldLabel
          isChecked
          onChange={() => null}
          {...checkBoxWithLabelProps()}
        />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
