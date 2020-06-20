import { text } from '@storybook/addon-knobs';
import { IRowContainerProps } from '..';

export const mobileS = `
  display: flex;
`;

export const mobileM = `
  display: flex;
`;

export const mobileL = `
  display: flex;
`;

export const tablet = `
  display: flex;
`;

export const laptop = `
  display: flex;
`;

export const laptopL = `
  display: flex;
`;

export const desktop = `
  display: flex;
`;

export const rowContainerProps = () : IRowContainerProps => ({
  alignItems: text('alignItems', 'center'),
  desktop: text('desktop', desktop),
  justifyContent: text('justifyContent', 'center'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
});
