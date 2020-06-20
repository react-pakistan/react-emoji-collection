import { theme } from '@taimoormk/util-functions';
import { text } from '@storybook/addon-knobs';
import { IHRProps } from '..';

export const hrProps = () : IHRProps => ({
  border: text('border', `1px solid ${theme.colors.skyBlue}`),
  margin: text('margin', '0px'),
  padding: text('padding', '0px'),
  width: text('width', '100%'),
});
