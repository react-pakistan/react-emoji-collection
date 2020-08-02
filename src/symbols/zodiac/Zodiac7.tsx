import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgZodiac7 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M11.88 12.21h48v47.83h-48z" />
    <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
      <path strokeWidth={2} d="M12.12 11.96h48v48h-48z" />
      <path
        strokeWidth={3}
        d="M34.44 37.72a69.312 69.312 0 01-1.186-11.86c0-5.93 9.487-8.301 11.86-2.372 1.888 7.085-11.79 27.93-2.372 28.46 4.744 0 3.988-5.356 3.988-5.356"
      />
      <circle cx={29.13} cy={39.22} r={5.5} strokeWidth={3} />
    </g>
  </svg>
);

export default SvgZodiac7;
