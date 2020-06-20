import { theme } from '@taimoormk/util-functions';
import { object } from '@storybook/addon-knobs';
import { ITypographyProps } from '..';

export const typographyProps = () : ITypographyProps => ({
  theme: object('theme', theme),
});
