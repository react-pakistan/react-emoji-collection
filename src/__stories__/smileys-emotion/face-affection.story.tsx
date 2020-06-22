import React, { ReactElement } from 'react';
import { EmojiWrapper, EmojiTextWrapper, EmojiItem } from '../../styled';
import { EMOJI_LIST } from './face-affection';

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

export const FaceAffection = () : ReactElement => (
  <EmojiWrapper>
    {emojis}
  </EmojiWrapper>
);

export default {
  title: 'PeopleBody|FaceAffection',

  parameters: {
    component: FaceAffection,
  },
};
