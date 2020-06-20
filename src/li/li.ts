import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const Li = styled.li<ILiProps>`
  align-items: ${({ type } : ILiProps) : false | string => type === LI_TYPE.PROGRESS_BAR ?
    'center' : type === LI_TYPE.DEFAULT && 'none'};
  background-color: ${({
    progressBarActiveDotColor,
    progressBarIsActive,
    theme,
    type,
  } : ThemedStyledProps<ILiProps, ITheme>) : string =>
    type === LI_TYPE.PROGRESS_BAR && progressBarIsActive ?
      progressBarActiveDotColor || theme.colors.seaGreen :
        theme.colors.lightGrey};
  border: 3px solid ${({ type, progressBarActiveDotBorder} : ThemedStyledProps<ILiProps, ITheme>) : string =>
    type === LI_TYPE.PROGRESS_BAR && progressBarActiveDotBorder || 'none'};
  border-radius: ${({ type } : ILiProps) : string => type === LI_TYPE.PROGRESS_BAR ?
    '50%' : 'none'};
  display: ${({ type } : ILiProps) : false | string => type === LI_TYPE.PROGRESS_BAR ?
    'flex' : type === LI_TYPE.DEFAULT && 'inherit'};
  flex: ${({ type } : ILiProps) : false | string => type === LI_TYPE.PROGRESS_BAR ?
    '0 1 auto' : type === LI_TYPE.DEFAULT && 'none'};
  flex-flow: ${({ type } : ILiProps) : false | string => type === LI_TYPE.PROGRESS_BAR ?
    'column nowrap' : type === LI_TYPE.DEFAULT && 'none'};
  height: ${({ type, progressBarDotSize } : ILiProps) : string => type === LI_TYPE.PROGRESS_BAR ?
    progressBarDotSize || '16px' : ''};
  justify-content: ${({ type } : ILiProps) : false | string => type === LI_TYPE.PROGRESS_BAR ?
    'flex-start' : type === LI_TYPE.DEFAULT && 'none'};
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: ${({ type, progressBarDotSize } : ILiProps) : string => type === LI_TYPE.PROGRESS_BAR ?
    progressBarDotSize || '16px' : ''};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : ILiProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export enum LI_TYPE {
  DEFAULT = 'default',
  PROGRESS_BAR = 'progressBar',
}

export interface ILiProps extends IResponsiveProps {
  /**
   * Specifies the color fo the active dot border
   */
  progressBarActiveDotBorder? : string;
  /**
   * Specifies the color of the active dot
   */
  progressBarActiveDotColor? : string;
  /**
   * Specifies the size of dot size
   */
  progressBarDotSize? : string;
  /**
   * Specifies if the dot if active or not
   */
  progressBarIsActive : boolean;
  /**
   * Specifies the type of the Li required
   */
  type : LI_TYPE;
}
