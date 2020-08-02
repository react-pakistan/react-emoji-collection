import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgAlphanum3 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#d0cfce"
      d="M59.035 60h-46.07a.968.968 0 01-.965-.965v-46.07a.968.968 0 01.965-.965h46.07a.968.968 0 01.965.965v46.07a.968.968 0 01-.965.965z"
    />
    <g fill="none" stroke="#000" strokeWidth={2}>
      <path
        strokeMiterlimit={10}
        d="M59.035 60h-46.07a.968.968 0 01-.965-.965v-46.07a.968.968 0 01.965-.965h46.07a.968.968 0 01.965.965v46.07a.968.968 0 01-.965.965z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M23 32v-5h25v5M27 22l3.104 5M34 22l3.144 5M44 22l-2.654 5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M28 31v6h15v-6H28zM33 41l2-4M25 50v-9h21v9M26 47h19"
      />
    </g>
  </svg>
);

export default SvgAlphanum3;
