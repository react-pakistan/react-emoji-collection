import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const Video = styled.video.attrs<IVideoProps>(({
  autoplay,
  controls,
  loop,
  muted,
  poster,
  preload,
  src,
  width,
} : IVideoProps) : IVideoProps => ({
  autoplay: autoplay || true,
  controls: controls || true,
  loop: loop || false,
  muted: muted || false,
  poster: poster || '',
  preload: preload || 'auto',
  src,
  width: width || '100%',
}))<IVideoProps>`

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IVideoProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IVideoProps extends IResponsiveProps {
  /**
   * Specifies that the video will start playing as soon as it is ready
   * @default true
   */
  autoplay? : boolean;
  /**
   * Specifies that video controls should be displayed (such as a play/pause button etc).
   * @default true
   */
  controls? : boolean;
  /**
   * Specifies that the video will start over again, every time it is finished
   * @default false
   */
  loop? : boolean;
  /**
   * Specifies that the audio output of the video should be muted
   * @default false
   */
  muted? : boolean;
  /**
   * Specifies an image to be shown while the video is downloading, or until the user hits the play button
   * @default ''
   */
  poster? : string;
  /**
   * Specifies if and how the author thinks the video should be loaded when the page loads
   * @default auto
   */
  preload? : string;
  /**
   * Specifies the URL of the video file
   */
  src : string;
  /**
   * Specifies the URL of the video file
   * @default 100%
   */
  width? : string;
}
