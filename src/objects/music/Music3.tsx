import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgMusic3 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <g fill="#3F3F3F">
      <path d="M26.324 22.812l25.295-5.26-.07-4.677-25.444 5.666z" />
      <circle cx={20.756} cy={51.59} r={5.787} />
      <circle cx={46.206} cy={46.013} r={5.787} />
    </g>
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M51.619 17.552l-25.445 5.67-.069-4.681 25.444-5.666z" />
      <circle cx={20.756} cy={51.59} r={5.787} />
      <path d="M26.105 18.541l.438 33.049" />
      <circle cx={46.206} cy={46.013} r={5.787} />
      <path d="M51.555 12.963l.438 33.05" />
    </g>
  </svg>
);

export default SvgMusic3;
