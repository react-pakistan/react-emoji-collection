import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgFaceNegative4 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#D22F27"
      d="M48.856 16c3-2 4-5 3-9 7 2 6 10 3 15M23.144 16c-3-2-4-5-3-9-7 2-6 10-3 15"
    />
    <path
      fill="#EA5A47"
      d="M36 13c-12.682 0-23 10.318-23 23s10.318 23 23 23 23-10.318 23-23-10.318-23-23-23z"
    />
    <g>
      <circle
        cx={36}
        cy={36}
        r={23}
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path d="M30 32.925a3.001 3.001 0 01-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3M48 32.925a3.001 3.001 0 01-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3" />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M23 25l7 4M49 25l-7 4M48.856 16c3-2 4-5 3-9 7 2 6 10 3 15M23.144 16c-3-2-4-5-3-9-7 2-6 10-3 15M42.5 43c-1.284.638-3.985 1.03-6.842.998-2.624-.03-4.99-.414-6.158-.998"
      />
    </g>
  </svg>
);

export default SvgFaceNegative4;
