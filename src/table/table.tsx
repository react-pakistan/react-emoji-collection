import React, {
  ReactElement,
  ReactNode,
  ReactText,
} from 'react';
import {
  ItemWrapper,
  RowWrapper,
  TableWrapper,
} from './styled';
import { Text } from '..';

export const Table = ({
  data,
  header,
} : ITableProps) : ReactElement => (
  <TableWrapper>
    {data.map((itemArray : Array<ReactText>, index : number) : ReactNode => (
      <RowWrapper key={itemArray[index]}>
        {itemArray.map((item : ReactText) : ReactNode => (
          <ItemWrapper key={item}>
            <Text
              fontWeight={header && index === 0 ? 700 : 400}
            >
              {item}
            </Text>
          </ItemWrapper>
        ))}
      </RowWrapper>
    ))}
  </TableWrapper>
);

export interface ITableProps {
  /**
   *
   */
  data : Array<Array<ReactText>>;
  /**
   *
   */
  header : boolean;
}
