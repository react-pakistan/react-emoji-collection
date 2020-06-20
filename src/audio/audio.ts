import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const Audio = styled.audio.attrs<IAudioProps>(({
  autoplay,
  controls,
  loop,
  muted,
  preload,
  src,
} : IAudioProps) : IAudioProps => ({
  autoplay: autoplay || true,
  controls: controls || true,
  loop: loop || false,
  muted: muted || false,
  preload: preload || 'auto',
  src,
}))<IAudioProps>`
  width: 100%;

  &::-webkit-media-controls-panel {
    background-color: ${({ controlPanelColor } : IAudioProps) : string => controlPanelColor || ''};
  }

  &::-webkit-media-controls-current-time-display {
    color: ${({ currentTimeColor } : IAudioProps) : string => currentTimeColor || ''};
  }

  &::-webkit-media-controls-time-remaining-display {
    color: ${({ remainingTimeColor } : IAudioProps) : string => remainingTimeColor || ''};
  }

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IAudioProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IAudioProps extends IResponsiveProps {
  /**
   * Specifies that the audio will start playing as soon as it is ready
   * @default true
   */
  autoplay? : boolean;
  /**
   * Specifies the color of the control panel
   * @default ''
   */
  controlPanelColor? : string;
  /**
   * Specifies that audio controls should be displayed (such as a play/pause button etc)
   * @default true
   */
  controls? : boolean;
  /**
   * Specifies the color of current time
   * @default ''
   */
  currentTimeColor? : string;
  /**
   * Specifies that the audio will start over again, every time it is finished
   * @default false
   */
  loop? : boolean;
  /**
   * Specifies that the audio output should be muted
   * @default false
   */
  muted? : boolean;
  /**
   * Specifies if and how the author thinks the audio should be loaded when the page loads
   * @default auto
   */
  preload? : string;
  /**
   * Specifies the color of reamining time
   * @default ''
   */
  remainingTimeColor? : string;
  /**
   * Specifies the URL of the audio file
   */
  src : string;
}
