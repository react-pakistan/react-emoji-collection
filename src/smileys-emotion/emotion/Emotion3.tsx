import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgEmotion3 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    >
      <path
        strokeWidth={6}
        d="M49 8h13.143L49 31h13.143M28.143 33.75H37l-8.857 15.5H37"
      />
      <path strokeWidth={4.645} d="M9.143 52.5H16l-6.857 12H16" />
    </g>
  </svg>
);

export default SvgEmotion3;
