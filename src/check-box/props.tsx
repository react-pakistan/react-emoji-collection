import { boolean, text } from '@storybook/addon-knobs';
import { IconCheck } from '@taimoormk/react-icon-collection/icons/misc-grey';
import { theme } from '@taimoormk/util-functions';
import React from 'react';

export const mobileS = '';

export const mobileM = '';

export const mobileL = '';

export const tablet = '';

export const laptop = '';

export const laptopL = '';

export const desktop = '';

export const checkBoxProps = () : any => ({
  check: <IconCheck fill={theme.colors.white} fontSize='20px' />,
  checkedColor: text('checkedColor', theme.colors.skyBlue),
  desktop: text('desktop', desktop),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
  unCheckedColor: text('unCheckedColor', theme.colors.lighterBlack),
});

export const checkBoxWithLabelProps = () : any => ({
  check: <IconCheck fill={theme.colors.white} fontSize='20px' />,
  checkedColor: text('checkedColor', theme.colors.skyBlue),
  desktop: text('desktop', desktop),
  hasError: boolean('hasError', false),
  helperText: text('helperText', 'There is an error'),
  helperTextColor: text('helperTextColor', theme.colors.cherryRed),
  label: text('label', 'Pick one'),
  laptop: text('laptop', laptop),
  laptopL: text('laptopL', laptopL),
  mobileL: text('mobileL', mobileL),
  mobileM: text('mobileM', mobileM),
  mobileS: text('mobileS', mobileS),
  tablet: text('tablet', tablet),
  unCheckedColor: text('unCheckedColor', theme.colors.lighterBlack),
});
