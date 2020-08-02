import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgPhone2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#d0cfce" d="M11 22h50v28H11z" />
    <path fill="#9b9b9a" d="M61 50H50.685L36.512 22H61v28z" />
    <path fill="#b1cc33" d="M16 27h33v11.2H16z" />
    <path fill="#5c9e31" d="M49 38.2h-7.488L35.843 27H49v11.2z" />
    <g>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 50V22M61 50H11M61 22v28M11 22h50"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M16 38.2V27M49 38.2H16M49 27v11.2M16 27h33"
      />
      <circle cx={20.638} cy={44.1} r={2} />
      <circle cx={28.638} cy={44.1} r={2} />
      <circle cx={36.638} cy={44.1} r={2} />
    </g>
  </svg>
);

export default SvgPhone2;
