import { ITheme } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const TypographyWrapper = styled.div`
  border: 1px solid ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.lightBlack};
  min-height: 225px;
  padding: 1em;
`;

export const TypographyText = styled.div`
  padding: 0 0 1em 0;
`;
