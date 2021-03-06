import { ITheme } from '@react-pakistan/util-functions';
import { SVGProps } from 'react';
import styled, { ThemedStyledProps } from 'styled-components';

export const EmojiWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const EmojiTextWrapper = styled.div`
  color: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.white};
  font-size: 0.75em;
  margin-top: 0.75em;
`;

export const EmojiItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 10em;
  justify-content: center;
  width: 10em;
`;

export interface IEmojiProps extends SVGProps<SVGSVGElement> {
  style? : {
    height? : string;
    width? : string;
  }
}
