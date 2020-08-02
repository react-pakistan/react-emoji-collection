import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgAlphanum12 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#d0cfce"
      d="M59.035 60h-46.07a.968.968 0 01-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965z"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M59.035 60h-46.07a.968.968 0 01-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965z" />
      <path
        strokeLinecap="round"
        d="M30.11 47.005v-22h8.389a5.48 5.48 0 015.479 5.48h0a5.48 5.48 0 01-5.48 5.479H30.11"
      />
    </g>
  </svg>
);

export default SvgAlphanum12;
