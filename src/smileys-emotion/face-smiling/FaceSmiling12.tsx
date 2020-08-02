import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgFaceSmiling12 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={36} cy={36} r={23} fill="#FCEA2B" />
    <circle
      cx={36}
      cy={36}
      r={23}
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26.185 27.07c2.9-1.636 6.248-2.57 9.815-2.57s6.915.934 9.815 2.57"
    />
    <path d="M42 41a3.001 3.001 0 016 0c0 1.655-1.345 3-3 3s-3-1.345-3-3M24 41a3.001 3.001 0 016 0c0 1.655-1.345 3-3 3s-3-1.345-3-3" />
  </svg>
);

export default SvgFaceSmiling12;
