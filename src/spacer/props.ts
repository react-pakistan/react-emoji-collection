import { text } from '@storybook/addon-knobs';
import { ISpacerProps } from '..';

export const spacerProps = () : ISpacerProps => ({
  margin: text('margin', '1em 1em 1em 1em'),
  padding: text('padding', '0em 0em 0em 0em'),
});
