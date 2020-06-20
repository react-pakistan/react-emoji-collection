import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Select, SelectWithFieldLabel } from '../select';
import { selectProps, selectWithLabelProps } from '../select/props';

describe('Testing Select component', () => {
  it('matches Select snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Select {...selectProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('matches SelectWithFieldLabel snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <SelectWithFieldLabel {...selectWithLabelProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
