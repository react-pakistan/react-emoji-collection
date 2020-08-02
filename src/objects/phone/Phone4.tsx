import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgPhone4 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#9B9B9A"
      d="M52.5 64.764h-33a1 1 0 01-1-1v-56a1 1 0 011-1h33a1 1 0 011 1v56a1 1 0 01-1 1z"
    />
    <path
      fill="#D0CFCE"
      d="M48.034 55H23.966a.966.966 0 01-.966-.966V13.966c0-.534.433-.966.966-.966h24.068c.534 0 .966.432.966.966v40.068a.966.966 0 01-.966.966z"
    />
    <path fill="#FFF" d="M31 10h10-10z" />
    <g stroke="#000" strokeMiterlimit={10}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M52.5 64.764h-33a1 1 0 01-1-1v-56a1 1 0 011-1h33a1 1 0 011 1v56a1 1 0 01-1 1z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M48.034 55H23.966a.966.966 0 01-.966-.966V13.966c0-.534.433-.966.966-.966h24.068c.534 0 .966.432.966.966v40.068a.966.966 0 01-.966.966z"
      />
      <circle cx={36} cy={60} r={2} />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M31 10h10-10z"
      />
    </g>
  </svg>
);

export default SvgPhone4;
