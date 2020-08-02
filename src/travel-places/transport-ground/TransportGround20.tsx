import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgTransportGround20 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#3f3f3f" d="M21 50L11 61h50L51 50H21z" />
    <rect
      x={21.6}
      y={15}
      rx={3.056}
      ry={3.056}
      width={28.8}
      height={33}
      fill="#d0cfce"
    />
    <path fill="#61b2e4" d="M25 19h22v14H25z" />
    <path fill="#92d3f5" d="M47 19H25v14" />
    <path fill="#fcea2b" d="M25 37h5v5h-5zM42 37h5v5h-5z" />
    <g fill="none" stroke="#000" strokeLinecap="round" strokeWidth={2}>
      <rect
        x={21.6}
        y={15}
        rx={3.056}
        ry={3.056}
        width={28.8}
        height={33}
        strokeLinejoin="round"
      />
      <path strokeMiterlimit={10} d="M24 51l-8 9M48 51l8 9" />
      <path
        strokeLinejoin="round"
        d="M35.166 15L27 8h17l-8.834 7zM47 20v13H26M26 42h4v-4M43 42h4v-4"
      />
    </g>
  </svg>
);

export default SvgTransportGround20;
