import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgAvSymbol10 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={36} cy={36} r={5} fill="#fcea2b" />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <circle cx={36} cy={36} r={5} />
      <path d="M36 26.087V24M43.01 28.99l1.475-1.475M45.913 36H48M43.01 43.01l1.475 1.475M36 45.913V48M28.99 43.01l-1.475 1.475M26.087 36H24M28.99 28.99l-1.475-1.475" />
    </g>
  </svg>
);

export default SvgAvSymbol10;
