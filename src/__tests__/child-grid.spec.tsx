import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { ChildGrid } from '../child-grid';
import { childGridProps } from '../child-grid/props';

describe('Testing ChildGrid component', () => {
  it('matches ChildGrid snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <ChildGrid {...childGridProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
