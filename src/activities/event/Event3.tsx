import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgEvent3 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M62 23l5.657-1.414M55 14.343L56.414 20M60 20l3-5" />
    </g>
    <rect
      x={3.516}
      y={31.28}
      rx={1}
      width={40}
      height={13}
      transform="rotate(-45 23.516 37.78)"
      fill="#d22f27"
    />
    <g
      fill="none"
      stroke="#fcea2b"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M62 23l5.657-1.414M55 14.343L56.414 20M60 20l3-5" />
    </g>
    <g fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={2}>
      <rect
        x={3.516}
        y={31.28}
        rx={1}
        width={40}
        height={13}
        transform="rotate(-45 23.516 37.78)"
      />
      <path
        strokeLinecap="round"
        d="M58 23.28s-2.757 6.829-7 4 .472-8.764-4-11c-4-2-9.342 7.357-9.342 7.357"
      />
    </g>
  </svg>
);

export default SvgEvent3;
