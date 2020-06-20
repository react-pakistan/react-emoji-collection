import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const A = styled.a.attrs<IAProps>(({
  download,
  href,
  hreflang,
  media,
  referrerpolicy,
  rel,
  target,
  type,
} : IAProps) : IAProps => ({
  download: download || null,
  href,
  hreflang: hreflang || '',
  media: media || '',
  referrerpolicy: referrerpolicy || '',
  rel: rel || '',
  target,
  type: type || '',
}))<IAProps>`
  color: ${({ color, theme } : ThemedStyledProps<IAProps, ITheme>) : string => color || theme.colors.darkGrey};
  text-decoration: none;

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IAProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export interface IAProps extends IResponsiveProps {
  /**
   * Specifies Color of the url label
   * @default theme.colors.darkGrey
   */
  color? : string;
  /**
   * Specifies that the target will be downloaded when a user clicks on the hyperlink
   * @default null
   */
  download? : string | null;
  /**
   * Specifies the URL of the page the link goes to
   */
  href : string;
  /**
   * Specifies the language of the linked document
   * @default ''
   */
  hreflang? : string;
  /**
   * Specifies what media/device the linked document is optimized for
   * @default ''
   */
  media? : string;
  /**
   * Specifies which referrer to send
   * @default ''
   */
  referrerpolicy? : string;
  /**
   * Specifies the relationship between the current document and the linked document
   * @default ''
   */
  rel? : string;
  /**
   * Specifies where to open the linked document
   * @default ''
   */
  target : string;
  /**
   * Specifies the media type of the linked document
   * @default ''
   */
  type? : string;
}
