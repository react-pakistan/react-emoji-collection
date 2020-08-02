import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgGeometric2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={36} cy={36} r={28} fill="#f1b31c" />
    <circle
      cx={36}
      cy={36}
      r={28}
      fill="none"
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGeometric2;
