import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgZodiac9 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M12 12h48v47.83H12z" />
    <g fill="none" stroke="#000">
      <circle
        cx={36.01}
        cy={39.47}
        r={8.651}
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M51.42 24.1a5.424 5.424 0 00-5.854 2.113c-2.709 5.178-9.561 4.558-9.561 4.558s-6.852.59-9.561-4.588a5.424 5.424 0 00-5.855-2.112"
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

export default SvgZodiac9;
