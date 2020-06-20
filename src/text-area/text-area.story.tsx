import React, { ReactElement } from 'react';
import { State } from 'react-powerplug';
import { StyledStory } from '../styled-app';
import { TextArea, TextAreaWithFieldLabel } from '..';
import { textAreaProps, textAreaWithLabelProps } from './props';

export default {
  title: 'Misc|TextArea',

  parameters: {
    component: TextArea,
  },
};

export const TextAreaStory = () : ReactElement => (
  <StyledStory>
    <State initial={{ value: '' }}>
      {({ state, setState } : any) : ReactElement => (
        <TextArea
          {...textAreaProps()}
          value={state.value}
          onChange={(event : React.ChangeEvent<HTMLTextAreaElement>) : void => setState({ value: event.target.value })}
        />
      )}
    </State>
  </StyledStory>
);

export const TextAreaWithLabelStory = () : ReactElement => (
  <StyledStory>
    <State initial={{ value: '' }}>
      {({ state, setState } : any) : ReactElement => (
        <TextAreaWithFieldLabel
          {...textAreaWithLabelProps()}
          // helperText="There is an error"
          // helperTextColor={theme.colors.cherryRed}
          // label="Address"
          onChange={(event : React.ChangeEvent<HTMLTextAreaElement>) : void => setState({ value: event.target.value })}
          value={state.value}
        />
      )}
    </State>
  </StyledStory>
);
