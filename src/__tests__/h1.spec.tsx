import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { H1 } from '../h1';
import { h1Props } from '../h1/props';

describe('Testing H1 component', () => {
  it('matches H1 snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <H1 {...h1Props()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
