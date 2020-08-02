import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgBrand8 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <rect x={11} y={11} rx={3} width={50} height={50} fill="#61b2e4" />
    <path fill="#fff" d="M20 30h6v21h-6z" />
    <circle cx={23} cy={22} r={3.5} fill="#fff" />
    <path
      fill="#fff"
      d="M42.5 35c-2.209 0-4 1.168-4 4.5V51h-6V30h6v2.21h-.002A7.981 7.981 0 0144.5 29.5c4.418 0 8 3.3 8 9V51h-6V39.5c0-3.332-1.79-4.5-4-4.5"
    />
    <g fill="none" stroke="#000" strokeWidth={2}>
      <rect x={11} y={11} rx={3} width={50} height={50} strokeMiterlimit={10} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 30h6v21h-6z" />
      <circle
        cx={23}
        cy={22}
        r={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M42.5 35c-2.209 0-4 1.168-4 4.5V51h-6V30h6v2.21h-.002A7.981 7.981 0 0144.5 29.5c4.418 0 8 3.3 8 9V51h-6V39.5c0-3.332-1.79-4.5-4-4.5"
      />
    </g>
  </svg>
);

export default SvgBrand8;
