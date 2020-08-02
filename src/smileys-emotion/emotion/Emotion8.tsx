import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgEmotion8 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <g fill="#fff">
      <path d="M17.09 50.75A23.87 23.87 0 0112.002 36c0-13.23 10.77-24 24-24s24 10.77 24 24-10.77 24-24 24c-1.955 0-3.855-.24-5.676-.684-5.919-1.48-10.33-4.34-13.24-8.567z" />
      <circle cx={23.48} cy={54.97} r={5} />
      <circle cx={-15.8} cy={62.94} r={2.5} transform="scale(-1 1)" />
    </g>
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M31.54 58.56c1.442.286 2.93.44 4.455.44 12.68 0 23-10.32 23-23s-10.32-23-23-23-23 10.32-23 23a22.87 22.87 0 004.187 13.21"
    />
    <circle cx={26.79} cy={36} r={2} />
    <circle cx={36} cy={36} r={2} />
    <circle cx={45.21} cy={36} r={2} />
    <circle
      cx={-4.026}
      cy={64.73}
      r={2.5}
      transform="scale(-1 1) rotate(10.539)"
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <circle
      cx={-13.58}
      cy={57.88}
      r={4.981}
      transform="scale(-1 1) rotate(10.539)"
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmotion8;
