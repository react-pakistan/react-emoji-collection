import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgTransportGround4 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#d0cfce"
      d="M47 15.82v36c0 3.85-3.15 7-7 7h-8c-3.85 0-7-3.15-7-7v-36c0-3.85 3.15-7 7-7h8c3.85 0 7 3.15 7 7z"
    />
    <circle cx={36} cy={48.292} r={5} fill="#b1cc33" />
    <circle cx={36} cy={34.292} r={5} fill="#f4aa41" />
    <circle cx={36} cy={19.292} r={5} fill="#ea5a47" />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M47 16v36c0 3.85-3.15 7-7 7h-8c-3.85 0-7-3.15-7-7V16c0-3.85 3.15-7 7-7h8c3.85 0 7 3.15 7 7z" />
      <circle cx={36} cy={48.472} r={5} />
      <circle cx={36} cy={34.472} r={5} />
      <circle cx={36} cy={19.472} r={5} />
    </g>
  </svg>
);

export default SvgTransportGround4;
