import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgPlaceMap3 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path d="M33.2 33.2L48 24l-9.2 14.8" />
    <circle cx={36} cy={36} r={24} fill="#fcea2b" />
    <path
      fill="#f1b31c"
      d="M53 19a24.042 24.042 0 01-17 41 24.302 24.302 0 01-17-7"
    />
    <path fill="#fff" d="M33.2 33.2L24 48l14.8-9.2" />
    <path fill="#ea5a47" d="M33.2 33.2L48 24l-9.2 14.8" />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <circle cx={36} cy={36} r={24} />
      <path d="M33.2 33.2L24 48l14.8-9.2" />
      <path d="M33.2 33.2L48 24l-9.2 14.8M36 21v-5M36 56v-5M51 36h5M16 36h5" />
    </g>
  </svg>
);

export default SvgPlaceMap3;
