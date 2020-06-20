import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Canvas } from '../canvas';
import { canvasProps } from '../canvas/props';

describe('Testing Canvas component', () => {
  it('matches Canvas snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Canvas {...canvasProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
