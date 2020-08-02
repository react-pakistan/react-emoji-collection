import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgZodiac5 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M12 12h48v48H12z" />
    <g fill="none" stroke="#000" strokeLinecap="round">
      <path
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M22.86 21.4s3.659 6.388 13.14 6.32c9.481.068 13.14-6.32 13.14-6.32M49.14 50.6S45.481 44.212 36 44.28c-9.481-.068-13.14 6.32-13.14 6.32"
      />
      <path
        strokeLinejoin="round"
        strokeWidth={3}
        d="M40.32 44.16V27.85M30.32 44.85v-17"
      />
      <path strokeLinejoin="round" strokeWidth={2} d="M12 12h48v48H12z" />
    </g>
  </svg>
);

export default SvgZodiac5;
