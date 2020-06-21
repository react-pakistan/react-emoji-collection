import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { EMOJI_LIST } from './face-sleepy';

const emojiStyle = { width: '7rem', height: '7rem' };

const renderItem = (
  item : { emoji : React.SFC<React.SVGProps<SVGSVGElement>>, name : string },
  index : number
) => {
  const Emoji = item.emoji;
  return (
    <div
      key={index}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10rem',
        height: '10rem',
      }}
      title={item.name}
    >
      <Emoji style={emojiStyle} />
      <div style={{ fontSize: '0.75rem', marginTop: '0.75rem' }}>
        {item.name}
      </div>
    </div>
  );
};

const commonIcons = EMOJI_LIST.map(renderItem);

export const AllEmojis = () : React.ReactElement => (
  <div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {commonIcons}
    </div>
  </div>
);

const stories = storiesOf('Smileys Emotion', module);

stories.add('Face Sleepy', () => <AllEmojis />);
