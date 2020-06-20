import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const ProgressBar = styled.progress.attrs<IProgressBarAttrsProps>(({
  max,
  min,
  value,
} : IProgressBarAttrsProps) : IProgressBarAttrsProps => ({
  max,
  min,
  value,
  }),
)<IProgressBarProps>`
  border: 0px none;
  background-color: ${({ backgroundColorBar, theme } : ThemedStyledProps<IProgressBarProps, ITheme>) : string =>
    backgroundColorBar || theme.colors.cherryRed};
  height: ${({ height } : IProgressBarProps) : string => height || '0.25em'};
  width: ${({ width } : IProgressBarProps) : string => width || '100%'};

  &::-webkit-progress-bar {
    background-color: ${({ backgroundColorBar, theme } : ThemedStyledProps<IProgressBarProps, ITheme>) : string =>
      backgroundColorBar || theme.colors.cherryRed};
  }

  &::-webkit-progress-value {
    background-color: ${({ backgroundColorValue, theme } : ThemedStyledProps<IProgressBarProps, ITheme>) : string =>
      backgroundColorValue || theme.colors.lightBlack};
    transition: ${({ transition } : IProgressBarProps) : string => transition || '2.5s ease-out'};
  }

  &::-moz-progress-bar {
    background-color: ${({ backgroundColorBar, theme } : ThemedStyledProps<IProgressBarProps, ITheme>) : string =>
      backgroundColorBar || theme.colors.cherryRed};
  }

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IProgressBarProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IProgressBarAttrsProps {
  /**
   * Specifies the max value of progress bar component
   */
  max : string;
  /**
   * Specifies the min value of progress bar component
   */
  min : string;
  /**
   * Specifies the value of progress bar component
   */
  value : string;
}

export interface IProgressBarProps extends IResponsiveProps {
  /**
   * Specifies the background color of progress bar component
   * @default theme.colors.cherryRed
   */
  backgroundColorBar? : string;
  /**
   * Specifies the background color of value of progress bar component
   * @default theme.colors.lightBlack
   */
  backgroundColorValue? : string;
  /**
   * Specifies the height of progress bar component
   * @default 0.25em
   */
  height? : string;
  /**
   * Specifies the transition of progress bar component
   * @default '2.5s ease-out'
   */
  transition? : string;
  /**
   * Specifies the width of progress bar component
   * @default 100%
   */
  width? : string;
}
