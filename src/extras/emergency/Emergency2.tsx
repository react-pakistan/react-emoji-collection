import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgEmergency2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={35.939} cy={29.281} r={3.15} fill="#3f3f3f" />
    <path fill="#d0cfce" d="M46.439 64.56L36.838 32.3h-1.797l-9.602 32.26" />
    <g stroke="#000" strokeWidth={2}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M18.863 46.357a24.152 24.152 0 01-1.782-32.163M54.798 14.194a24.152 24.152 0 01-1.782 32.163M48.238 19.441a15.751 15.751 0 01-1.162 20.976M24.802 40.417a15.751 15.751 0 01-1.162-20.976"
      />
      <circle
        cx={35.939}
        cy={29.281}
        r={3.15}
        fill="none"
        strokeMiterlimit={10}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M28.589 55.477h14.7M31.739 43.613h8.4"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M35.041 32.3l-9.602 32.26M46.439 64.56L36.838 32.3"
      />
    </g>
  </svg>
);

export default SvgEmergency2;
