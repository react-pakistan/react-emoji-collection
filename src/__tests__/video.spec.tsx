import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Video } from '../video';
import { videoProps } from '../video/props';

describe('Testing Video component', () => {
  it('matches Video snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Video {...videoProps()}/>
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
