import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgPlaceGeographic9 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#3F3F3F"
      d="M52 42.2s-.2-6.2-.3-6.8-.7-1.6-1-2.1L48.2 29 42 24.5l-7.2 5.4 2.6 4.5 4.9-.4 10.2 13.3-.5-5.1z"
    />
    <path
      fill="#9B9B9A"
      d="M50 39l3.4 9.1L60 56H12l4-7 2-12 7-19 4 4 4 3 4 8h5l8 6"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M60 55l-6.6-6.9L50 39M37 33l-4-8-4-3-4-4-7 19-2 12-4 6" />
      <path d="M31 24l1 9h10l8 6-1 6 1 5-2 2-3 3M39 28l4-3 4 4 3 5" />
    </g>
  </svg>
);

export default SvgPlaceGeographic9;
