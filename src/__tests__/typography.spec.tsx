import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Typography } from '../typography';
import { typographyProps } from '../typography/props';

describe('Testing Typography component', () => {
  it('matches Typography snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Typography {...typographyProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
