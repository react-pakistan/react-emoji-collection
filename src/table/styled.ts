import { ITheme } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const TableWrapper = styled.div``;

export const RowWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.spacing.small};
`;

export const ItemWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
`;
