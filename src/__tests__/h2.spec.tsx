import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { H2 } from '../h2';
import { h2Props } from '../h2/props';

describe('Testing H2 component', () => {
  it('matches H2 snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <H2 {...h2Props()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
