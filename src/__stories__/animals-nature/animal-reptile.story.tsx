/*
 * Generated by scripts/generate-emojis.js
 * DO NOT EDIT!
 */

import React, { ReactElement } from 'react';
import { EmojiWrapper, EmojiTextWrapper, EmojiItem } from '../../styled';
import { StyledStory } from '../../styled-app';
import { EMOJI_LIST } from './animal-reptile';

const emojiStyle = { width: '7rem', height: '7rem' };

const renderItem = (
  item : { emoji : React.SFC<React.SVGProps<SVGSVGElement>> , name : string }
) : ReactElement => {
  const Emoji = item.emoji;
  return (
    <EmojiItem
      key={item.name}
    >
      <Emoji style={emojiStyle} />
      <EmojiTextWrapper>
        {item.name}
      </EmojiTextWrapper>
    </EmojiItem>
  );
};

const emojis = EMOJI_LIST.map(renderItem);

export const AnimalReptile = () : ReactElement => (
  <StyledStory>
    <EmojiWrapper>
      {emojis}
    </EmojiWrapper>
  </StyledStory>
);

export default {
  title: 'AnimalsNature/AnimalReptile',

  parameters: {
    component: AnimalReptile,
  },
};
