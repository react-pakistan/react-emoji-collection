import { IResponsiveProps, responsiveComponent } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const Iframe = styled.iframe.attrs<IIframeProps>(({
  height,
  name,
  sandbox,
  src,
  width,
} : IIframeProps) : IIframeProps => ({
  height,
  name: name || '',
  sandbox,
  src,
  width,
}))<IIframeProps>`

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IIframeProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export enum SANDBOX_TYPE {
  ALLOW_FORMS = 'allow-forms',
  ALLOW_POINTER_LOCK = 'allow-pointer-lock',
  ALLOW_POPUPS = 'allow-popups',
  ALLOW_SAME_ORIGIN = 'allow-same-origin',
  ALLOW_SCRIPTS = 'allow-scripts',
  ALLOW_TOP_NAVIGATION = 'allow-top-navigation',
}

export interface IIframeProps extends IResponsiveProps {
  /**
   * Height attribute for Iframe component
   */
  height : string;
  /**
   * Name attribute for Iframe component
   * @default ''
   */
  name? : string;
  /**
   * Sandbox attribute for Iframe component
   * @default null
   */
  sandbox? : SANDBOX_TYPE;
  /**
   * Src attribute for Iframe component
   */
  src : string;
  /**
   * Width attribute for Iframe component
   */
  width : string;
}
