import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { H5 } from '../h5';
import { h5Props } from '../h5/props';

describe('Testing H5 component', () => {
  it('matches H5 snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <H5 {...h5Props()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
