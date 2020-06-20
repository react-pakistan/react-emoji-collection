import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Table } from '..';
import { tableProps } from './props';

export default {
  title: 'Misc|Table',

  parameters: {
    component: Table,
  },
};

export const TableStory = () : ReactElement => (
  <StyledStory>
    <Table {...tableProps()} />
  </StyledStory>
);
