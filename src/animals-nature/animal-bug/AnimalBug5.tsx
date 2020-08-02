import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgAnimalBug5 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#D0CFCE"
      stroke="#D0CFCE"
      strokeMiterlimit={10}
      strokeWidth={1.8}
      d="M32 29.96s-20-15.924-20-3.982 7 5.971 9 9.952 5 .995 5 .995L31 40M40 30s20-16 20-4-7 6-9 10-5 1-5 1l-5 3"
    />
    <ellipse cx={36} cy={27} rx={4} ry={3} fill="#FCEA2B" />
    <ellipse cx={36} cy={32} rx={4} ry={2} fill="#A57939" />
    <path
      fill="#FCEA2B"
      d="M35 34.167C22.312 34.789 36 53 36 53s16-19.667-1-18.833z"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M34 23.583L32 20M38.333 23.667L40 20" />
      <ellipse cx={36} cy={27} rx={4} ry={3} />
      <ellipse cx={36} cy={32} rx={4} ry={2} />
      <path d="M35 34.167C22.312 34.789 36 53 36 53s16-19.667-1-18.833zM32 30s-20-16-20-4 7 6 9 10 5 1 5 1" />
      <path d="M46 37s3 3 5-1 9 2 9-10-20 4-20 4" />
    </g>
  </svg>
);

export default SvgAnimalBug5;
