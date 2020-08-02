import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgZodiac4 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M12 12h48v47.83H12z" />
    <g fill="none" stroke="#000" strokeLinecap="round">
      <path strokeLinejoin="round" strokeWidth={2} d="M12 12h48v48H12z" />
      <path
        strokeLinejoin="round"
        strokeWidth={3}
        d="M43.34 21.8l.18 19.62c-.014 4.962-3.336 8.807-7.43 8.807-4.093 0-7.416-3.845-7.43-8.807l-.18-19.62"
      />
      <path
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M52.4 35.85c-4.797 6.036-13.14 5.607-16.4.15s-11.6-5.886-16.4.15"
      />
    </g>
  </svg>
);

export default SvgZodiac4;
