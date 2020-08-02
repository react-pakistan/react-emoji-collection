import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgKeycap10 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#d0cfce" d="M11.875 12.124h48v47.834h-48z" />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M12.125 11.874h48v48h-48z" />
      <circle cx={36.125} cy={39.913} r={4.659} />
      <path d="M36.125 27.177l-3.816 10.066" />
    </g>
  </svg>
);

export default SvgKeycap10;
