import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { A } from '../a';
import { aProps } from '../a/props';

describe('Testing A component', () => {
  it('matches A snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <A {...aProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
