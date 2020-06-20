import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Audio } from '../audio';
import { audioProps } from '../audio/props';

describe('Testing Audio component', () => {
  it('matches Audio snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Audio {...audioProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
