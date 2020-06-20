import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const FileInput = styled.input.attrs({
  type: 'file',
})<IFileInputProps>`

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IFileInputProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IFileInputProps extends IResponsiveProps {
  /**
   *
   */
}
