import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Table } from '../table';
import { tableProps } from '../table/props';

describe('Testing Table component', () => {
  it('matches Table snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Table {...tableProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
