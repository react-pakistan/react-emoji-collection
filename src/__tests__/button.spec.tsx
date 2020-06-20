import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Button } from '../button';
import { buttonProps } from '../button/props';

describe('Testing Button component', () => {
  it('matches Button snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Button {...buttonProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
