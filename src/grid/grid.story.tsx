import React, { ReactElement } from 'react';
import { StyledStory } from '../styled-app';
import { Grid } from '..';
import { gridProps } from './props';

export default {
  title: 'Layout|Grid',

  parameters: {
    component: Grid,
  },
};

const itemStyle : React.CSSProperties = {
  alignItems: 'center',
  background: 'lightblue',
  border: '1px solid black',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  margin: 0,
  padding: '1rem',
};

function renderChildren(itemsNumber : number) : Array<JSX.Element> {
  const itemList : Array<JSX.Element> = [];
  for (let i = 0; i < itemsNumber; i++) {
    itemList.push(<h2 key={i} style={itemStyle}>Item</h2>);
  }
  return itemList;
}

export const GridStory = () : ReactElement => (
  <StyledStory>
    <Grid {...gridProps()}>
      {renderChildren(8)}
    </Grid>
  </StyledStory>
);
