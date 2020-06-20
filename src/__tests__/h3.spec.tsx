import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { H3 } from '../h3';
import { h3Props } from '../h3/props';

describe('Testing H3 component', () => {
  it('matches H3 snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <H3 {...h3Props()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
