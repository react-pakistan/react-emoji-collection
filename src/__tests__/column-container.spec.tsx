import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { ColumnContainer } from '../column-container';
import { columnContainerProps } from '../column-container/props';

describe('Testing ColumnContainer component', () => {
  it('matches ColumnContainer snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <ColumnContainer {...columnContainerProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
