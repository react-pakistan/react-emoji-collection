import { theme } from '@taimoormk/util-functions';
import { object } from '@storybook/addon-knobs';
import { IColorsProps } from '..';

export const colorsProps = () : IColorsProps => ({
  colors: object('colors', theme.colors),
});
