import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Grid } from '../grid';
import { gridProps } from '../grid/props';

describe('Testing Grid component', () => {
  it('matches Grid snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Grid {...gridProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
