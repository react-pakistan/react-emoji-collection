import { IResponsiveProps } from '@taimoormk/util-functions';
import React, { ReactElement, ReactNode } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  VKShareButton,
  VKIcon,
  OKShareButton,
  OKIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  LivejournalShareButton,
  LivejournalIcon,
  MailruShareButton,
  MailruIcon,
  ViberShareButton,
  ViberIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
  LineShareButton,
  LineIcon,
  PocketShareButton,
  PocketIcon,
  InstapaperShareButton,
  InstapaperIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import { Grid } from '../grid';

const componentMap : IComponentMap = {
  facebook: (socialIcon : ISocialShare) : ReactElement => (
    <FacebookShareButton url={socialIcon.shareUrl}>
      <FacebookIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </FacebookShareButton>
  ),
  twitter: (socialIcon : ISocialShare) : ReactElement => (
    <TwitterShareButton url={socialIcon.shareUrl}>
      <TwitterIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </TwitterShareButton>
  ),
  telegram: (socialIcon : ISocialShare) : ReactElement => (
    <TelegramShareButton url={socialIcon.shareUrl}>
      <TelegramIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </TelegramShareButton>
  ),
  whatsapp: (socialIcon : ISocialShare) : ReactElement => (
    <WhatsappShareButton url={socialIcon.shareUrl}>
      <WhatsappIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </WhatsappShareButton>
  ),
  linkedin: (socialIcon : ISocialShare) : ReactElement => (
    <LinkedinShareButton url={socialIcon.shareUrl}>
      <LinkedinIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </LinkedinShareButton>
  ),
  pinterest: (socialIcon : ISocialShare) : ReactElement => (
    <PinterestShareButton url={socialIcon.shareUrl} media={socialIcon.media}>
      <PinterestIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </PinterestShareButton>
  ),
  vk: (socialIcon : ISocialShare) : ReactElement => (
    <VKShareButton url={socialIcon.shareUrl}>
      <VKIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </VKShareButton>
  ),
  ok: (socialIcon : ISocialShare) : ReactElement => (
    <OKShareButton url={socialIcon.shareUrl}>
      <OKIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </OKShareButton>
  ),
  reddit: (socialIcon : ISocialShare) : ReactElement => (
    <RedditShareButton url={socialIcon.shareUrl}>
      <RedditIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </RedditShareButton>
  ),
  tumblr: (socialIcon : ISocialShare) : ReactElement => (
    <TumblrShareButton url={socialIcon.shareUrl}>
      <TumblrIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </TumblrShareButton>
  ),
  livejournal: (socialIcon : ISocialShare) : ReactElement => (
    <LivejournalShareButton url={socialIcon.shareUrl}>
      <LivejournalIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </LivejournalShareButton>
  ),
  mailru: (socialIcon : ISocialShare) : ReactElement => (
    <MailruShareButton url={socialIcon.shareUrl}>
      <MailruIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </MailruShareButton>
  ),
  viber: (socialIcon : ISocialShare) : ReactElement => (
    <ViberShareButton url={socialIcon.shareUrl}>
      <ViberIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </ViberShareButton>
  ),
  workplace: (socialIcon : ISocialShare) : ReactElement => (
    <WorkplaceShareButton url={socialIcon.shareUrl}>
      <WorkplaceIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </WorkplaceShareButton>
  ),
  line: (socialIcon : ISocialShare) : ReactElement => (
    <LineShareButton url={socialIcon.shareUrl}>
      <LineIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </LineShareButton>
  ),
  pocket: (socialIcon : ISocialShare) : ReactElement => (
    <PocketShareButton url={socialIcon.shareUrl}>
      <PocketIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </PocketShareButton>
  ),
  instapaper: (socialIcon : ISocialShare) : ReactElement => (
    <InstapaperShareButton url={socialIcon.shareUrl}>
      <InstapaperIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </InstapaperShareButton>
  ),
  email: (socialIcon : ISocialShare) : ReactElement => (
    <EmailShareButton url={socialIcon.shareUrl}>
      <EmailIcon
        borderRadius={socialIcon.borderRadius}
        round={socialIcon.round}
        size={socialIcon.size}
      />
    </EmailShareButton>
  ),
};

export const SocialShare = ({
  socialIcons,
} : ISocialShareProps) : ReactElement => (
  <Grid
    gridColumn={`repeat(18, auto)`}
    justifyItems="center"
  >
    {socialIcons.map((socialIcon : ISocialShare) : ReactElement => {
      return (
        <React.Fragment key={socialIcon.id}>
          {componentMap[socialIcon.serviceName](socialIcon)}
        </React.Fragment>
      ); },
    )}
  </Grid>
);

export interface ISocialShare extends IResponsiveProps {
  /**
   * Specifies the border radius of icon wrapper
   */
  borderRadius : number;
  /**
   * Specifies the id of icon wrapper
   */
  id : string;
  /**
   * An absolute link to the image that will be pinned
   * @default ''
   */
  media? : string;
  /**
   * Specifies the round border of icon wrapper
   */
  round : boolean;
  /**
   * Specifies the service name of icon
   */
  serviceName : string;
  /**
   * Specifies the share url of icon
   */
  shareUrl : string;
  /**
   * Specifies the size of icon
   */
  size : number;
}

export interface ISocialShareProps {
  /**
   * Array of all social icons
   */
  socialIcons : Array<ISocialShare>;
}

export interface IComponentMap {
  /**
   * Component map structure
   */
  [key : string] : (socialIcon : ISocialShare) => ReactNode;
}
