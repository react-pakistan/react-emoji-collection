import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgSkyWeather11 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <rect x={12} y={12} rx={1} width={48} height={48} fill="#d0cfce" />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <rect x={12} y={12} rx={1} width={48} height={48} />
      <path d="M38 54.938L21 55s-5 0-5-5 6-5 6-5M23 41.938s1-9 9-9a7.5 7.5 0 016 3M39 38.938s4.163-4.613 9-3a6.83 6.83 0 014 4M50 42.938s7-1 7 5-8 7-15 7M32.015 18.424C34.17 15.534 40.265 13.85 43 19M36 29.064S40 29 45 29a3.508 3.508 0 100-7M20 20s2-3 5-3 4 3 4 3M49.644 17.813A6.05 6.05 0 0154.814 24M27.696 47.365s3.696-5.598 7.929-2.268M20 23c-5 1-3 6 0 6h11" />
    </g>
  </svg>
);

export default SvgSkyWeather11;
