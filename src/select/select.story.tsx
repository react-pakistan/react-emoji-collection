import React, { ReactElement, ReactNode } from 'react';
import { StyledStory } from '../styled-app';
import {
  IOptionProps,
  Option,
  Select,
  SelectWithFieldLabel,
} from '..';
import {
  optionProps,
  selectProps,
  selectWithLabelProps,
} from './props';

export default {
  title: 'Input|Select',

  parameters: {
    component: Select,
  },
};

export const SelectStory = () : ReactElement => (
  <StyledStory>
    <Select {...selectProps()}>
      {
        optionProps.map((option : IOptionProps) : ReactNode => (
          <Option
            key={option.id}
            value={option.value}
            selected={option.selected}
            disabled={option.disabled}
          >
            {option.label}
          </Option>
        ))
      }
    </Select>
  </StyledStory>
);

export const SelectWithLabelStory = () : ReactElement => (
  <StyledStory>
    <SelectWithFieldLabel {...selectWithLabelProps()}>
      {
        optionProps.map((option : IOptionProps) : ReactNode => (
          <Option
            key={option.id}
            value={option.value}
            selected={option.selected}
            disabled={option.disabled}
          >
            {option.label}
          </Option>
        ))
      }
    </SelectWithFieldLabel>
  </StyledStory>
);
