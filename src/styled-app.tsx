import { MiscColor1 } from '@react-pakistan/react-logo-collection/misc-color';
import { ITheme } from '@react-pakistan/util-functions';
import * as React from 'react';
import styled, { ThemeProvider, ThemedStyledProps } from 'styled-components';
import { emojiTheme } from './theme';

export const StyledApp = styled.div`
  display: inline-block;
  font-family: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.typography.fontFamily};
  width: 100%;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export const StyledStory = ({ children } : { children : React.ReactNode }) => (
  <ThemeProvider theme={emojiTheme}>
    <StyledApp>{children}</StyledApp>
    <MiscColor1 fontSize='200px' />
  </ThemeProvider>
);

// Due to our `typedef` rule, this type is needed as a helper.
// Actually, by using helpers exported above, styled-components-props
// can be calculated automatically by tsc already.
export type WithTheme<P = {}> = ThemedStyledProps<P, ITheme>;
