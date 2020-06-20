import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const ColorInput = styled.input.attrs({
  type: 'color',
})<IColorInputProps>`
  border: none;
  background: none;
  padding: 0;

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IColorInputProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IColorInputProps extends IResponsiveProps {
  /**
   *
   */
}
