import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgGame21 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <g fill="#3F3F3F">
      <circle cx={19} cy={36.7} r={11.5} />
      <circle cx={36.2} cy={19.6} r={11.5} />
      <circle cx={53.4} cy={36.7} r={11.5} />
      <path d="M38.7 38.8c1.2 7.9 7 20.5 8.9 21.3H24.9c2-.9 8.4-15.1 9-22.8l.3-.9 4.8 1.5-.3.9z" />
    </g>
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M38.7 38.8c1.2 7.9 7 20.5 8.9 21.3H36.2h0-11.3c2-.9 8.4-15.1 9-22.8" />
      <circle cx={36.2} cy={19.6} r={11.5} />
      <circle cx={53.4} cy={36.7} r={11.5} />
      <circle cx={19} cy={36.7} r={11.5} />
    </g>
  </svg>
);

export default SvgGame21;
