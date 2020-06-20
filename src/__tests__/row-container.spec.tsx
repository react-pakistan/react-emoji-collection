import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { RowContainer } from '../row-container';
import { rowContainerProps } from '../row-container/props';

describe('Testing RowContainer component', () => {
  it('matches RowContainer snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <RowContainer {...rowContainerProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
