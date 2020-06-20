import React from 'react';
import { mount } from 'enzyme';
import { StyledStory } from '../styled-app';
import { Footer } from '../footer';
import { footerProps } from '../footer/props';

describe('Testing Footer component', () => {
  it('matches Footer snapshot', () => {
    const wrapper = mount(
      <StyledStory>
        <Footer {...footerProps()} />
      </StyledStory>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
