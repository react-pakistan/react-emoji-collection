import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { ProgressBar } from '../progress-bar';
import { progressBarProps } from '../progress-bar/props';

describe('Testing ProgressBar component', () => {
  it('matches ProgressBar snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <ProgressBar {...progressBarProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
