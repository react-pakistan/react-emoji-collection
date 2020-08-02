import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgHousehold1 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#A57939" d="M18 9h36v54H18z" />
    <path fill="#6A462F" d="M24 14.094h24v16.302H24zM24 45.679h24v11.207H24z" />
    <g>
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M18 9h36v54H18z"
      />
      <ellipse cx={49} cy={36.509} rx={2.5} ry={2.038} />
      <path d="M49.5 41.604h-1a1 1 0 01-1-1v-6.151a1 1 0 011-1h1a1 1 0 011 1v6.15a1 1 0 01-1 1z" />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M24 14.094h24v16.302H24zM24 45.679h24v11.207H24z"
      />
    </g>
  </svg>
);

export default SvgHousehold1;
