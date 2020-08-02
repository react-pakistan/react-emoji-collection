import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgZodiac6 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M12 12h48v47.83H12z" />
    <g fill="none" stroke="#000">
      <path
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M33.61 30.26a5.559 5.559 0 11-5.559-5.558 5.56 5.56 0 015.559 5.558z"
      />
      <path
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M25.7 25.26s10.84-4.787 23.81 3.012"
      />
      <path
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M38.39 41a5.559 5.559 0 115.56 5.56A5.561 5.561 0 0138.39 41z"
      />
      <path
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M46.3 46s-10.84 4.787-23.81-3.012"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12h48v48H12z"
      />
    </g>
  </svg>
);

export default SvgZodiac6;
