import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { HR } from '../hr';
import { hrProps } from '../hr/props';

describe('Testing HR component', () => {
  it('matches HR snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <HR {...hrProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
