import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgZodiac2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M12 12h48v48H12z" />
    <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
      <path strokeWidth={2} d="M12 12h48v48H12z" />
      <path
        strokeWidth={3}
        d="M30.53 39.5H20M52 39.5h-9.53M52 44.5H20M30.53 39.5a8.443 8.443 0 01-1.83-9.201 8.443 8.443 0 017.8-5.212 8.443 8.443 0 017.8 5.212 8.443 8.443 0 01-1.83 9.201"
      />
    </g>
  </svg>
);

export default SvgZodiac2;
