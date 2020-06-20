import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const Ul = styled.ul<IUlProps>`
  align-items: ${({ type } : IUlProps) : false | string => type === UL_TYPE.PROGRESS_BAR ?
    'center' : type === UL_TYPE.DEFAULT && 'none'};
  display: ${({ type } : IUlProps) : false | string => type === UL_TYPE.PROGRESS_BAR ?
    'flex' : type === UL_TYPE.DEFAULT && 'inherit'};
  flex-flow: ${({ type } : IUlProps) : false | string => type === UL_TYPE.PROGRESS_BAR ?
    'row nowrap' : type === UL_TYPE.DEFAULT && 'none'};
  justify-content: ${({ type } : IUlProps) : false | string => type === UL_TYPE.PROGRESS_BAR ?
    'space-between' : type === UL_TYPE.DEFAULT && 'none'};
  list-style: none;
  margin: 0;
  padding: 0;
  position: ${({ type } : IUlProps) : false | string => type === UL_TYPE.PROGRESS_BAR ?
    'relative' : type === UL_TYPE.DEFAULT && 'none'};

  ${({ type } : IUlProps) : false | string => type === UL_TYPE.PROGRESS_BAR && (`::after {
    border: 2px solid #60C8DA;
    content: "";
    left: 0px;
    position: absolute;
    width: 100%;
    z-index: -1;
  }`)}

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IUlProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IUlProps extends IResponsiveProps {
  /**
   * Specifies the type of the Ul required
   */
  type : UL_TYPE;
}

export enum UL_TYPE {
  DEFAULT = 'default',
  PROGRESS_BAR = 'progressBar',
}
