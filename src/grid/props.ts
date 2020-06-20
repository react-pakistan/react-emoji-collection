import { text } from '@storybook/addon-knobs';
import { IGridProps } from '..';

export const mobileS = `
  grid-template-columns: 1fr;
`;

export const mobileM = `
  grid-template-columns: 1fr;
`;

export const mobileL = `
  grid-template-columns: 1fr;
`;

export const tablet = `
  grid-template-columns: 1fr 1fr 1fr;
`;

export const laptop = `
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const laptopL = `
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const desktop = `
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const gridProps = () : IGridProps => ({
  alignItems: text('alignItems', 'center'),
  columnGap: text('columnGap', '1em'),
  desktop: text('desktop', desktop),
  gridColumn: text('gridColumn', '1fr 1fr 1fr'),
  gridRow: text('gridRow', '1fr 1fr'),
  height: text('height', 'auto'),
  justifyItems: text('justifyItems', 'stretch'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  rowGap: text('rowGap', '1em'),
  tablet: text('tablet', tablet),
  width: text('width', '100%'),
});
