import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgAlphanum36 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <g fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={2}>
      <circle cx={36} cy={35.958} r={28} />
      <path
        strokeLinecap="round"
        d="M45.429 46.458v-22L36 43.315l-9.429-18.857v22"
      />
    </g>
    <circle cx={36} cy={36} r={28} fill="#1e50a0" />
    <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={2}>
      <circle cx={36} cy={36} r={28} />
      <path
        strokeLinecap="round"
        d="M45.429 46.5v-22L36 43.357 26.571 24.5v22"
      />
    </g>
  </svg>
);

export default SvgAlphanum36;
