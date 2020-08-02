import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgEvent2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#d22f27" d="M17 5h38v62H17z" />
    <circle cx={36} cy={27} r={10} fill="#f1b31c" />
    <g>
      <g fill="none" stroke="#000">
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M31.887 21.413v2.454M29.924 23.867h3.85A12.01 12.01 0 0129.7 28.85" />
          <path d="M33.587 28.264a5.238 5.238 0 01-1.7-1.452v5.775M34.812 22.148H41.7M35.98 23.84h4.488v2.01H35.98zM35.37 32.537v-4.922h5.796v4.922M35.37 29.667h5.796M35.37 31.716h5.796M38.229 31.716v-4.101" />
        </g>
        <g strokeLinecap="round" strokeMiterlimit={10} strokeWidth={2}>
          <circle cx={36} cy={27} r={10} />
          <path d="M55 18a25.4 25.4 0 01-9.289 6.652M26.289 24.652A25.4 25.4 0 0117 18" />
        </g>
        <path strokeLinejoin="round" strokeWidth={2} d="M17 5h38v62H17z" />
      </g>
    </g>
  </svg>
);

export default SvgEvent2;
