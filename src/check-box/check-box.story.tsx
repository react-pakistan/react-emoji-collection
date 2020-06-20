import { IconCheck } from '@taimoormk/react-icon-collection/icons/misc-grey';
import React, { ReactElement } from 'react';
import { State } from 'react-powerplug';
import { CheckBox, CheckBoxWithFieldLabel, theme } from '..';
import { StyledStory } from '../styled-app';
import { checkBoxProps, checkBoxWithLabelProps } from './props';

export default {
  title: 'Input|CheckBox',

  parameters: {
    component: CheckBox,
  },
};

export const CheckBoxStory = () : ReactElement => (
  <StyledStory>
    <State initial={{ isChecked: false }}>
      {({ state, setState } : any) : ReactElement => (
        <CheckBox
          check={<IconCheck fill={theme.colors.white} fontSize='14px' />}
          checkedColor={theme.colors.skyBlue}
          isChecked={state.isChecked}
          onChange={() : void => setState({ isChecked: !state.isChecked })}
          unCheckedColor={theme.colors.lighterBlack}
          {...checkBoxProps()}
        />
      )}
    </State>
  </StyledStory>
);

export const CheckBoxWithLabelStory = () : ReactElement => (
  <StyledStory>
    <State initial={{ isChecked: false }}>
      {({ state, setState } : any) : ReactElement => (
        <CheckBoxWithFieldLabel
          check={<IconCheck fill={theme.colors.white} fontSize='14px' />}
          checkedColor={theme.colors.skyBlue}
          isChecked={state.isChecked}
          onChange={() : void => setState({ isChecked: !state.isChecked })}
          unCheckedColor={theme.colors.lighterBlack}
          {...checkBoxWithLabelProps()}
        />
      )}
    </State>
  </StyledStory>
);
