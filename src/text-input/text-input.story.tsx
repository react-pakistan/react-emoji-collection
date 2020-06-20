import React, { ReactElement } from 'react';
import { State } from 'react-powerplug';
import { StyledStory } from '../styled-app';
import { TextInput, TextInputWithFieldLabel } from '..';
import { textInputProps, textInputWithLabelProps } from './props';

export default {
  title: 'Input|TextInput',

  parameters: {
    component: TextInput,
  },
};

export const TextInputStory = () : ReactElement => (
  <StyledStory>
    <State initial={{ value: '' }}>
      {({ state, setState} : any) : ReactElement => (
        <TextInput
          {...textInputProps()}
          onChange={(event : React.ChangeEvent<HTMLInputElement>) : void => setState({ value: event.target.value })}
          value={state.value}
        />
      )}
    </State>
  </StyledStory>
);

export const TextInputWithLabelStory = () : ReactElement => (
  <StyledStory>
    <State initial={{ value: '' }}>
      {({ state, setState} : any) : ReactElement => (
        <TextInputWithFieldLabel
          {...textInputWithLabelProps()}
          onChange={(event : React.ChangeEvent<HTMLInputElement>) : void => setState({ value: event.target.value })}
          value={state.value}
        />
      )}
    </State>
  </StyledStory>
);
