import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Header } from '../header';

describe('Testing Header component', () => {
  it('matches Header snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Header />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
