import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { H4 } from '../h4';
import { h4Props } from '../h4/props';

describe('Testing H4 component', () => {
  it('matches H4 snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <H4 {...h4Props()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
