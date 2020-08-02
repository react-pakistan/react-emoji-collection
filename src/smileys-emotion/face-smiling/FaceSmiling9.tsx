import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgFaceSmiling9 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#fcea2b"
      d="M36 60a24 24 0 0018.157-39.695q-.13-.152-.265-.301A24 24 0 1036 60z"
    />
    <g fill="none" stroke="#000" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M45.815 45.227a15.43 15.43 0 01-19.63 0M47.766 16.233a23.027 23.027 0 00-23.37-.096M17.638 22.147a23 23 0 1036.625-.13"
      />
      <ellipse cx={36} cy={14.8} rx={25} ry={5.25} strokeMiterlimit={10} />
      <path
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M31.694 33.404a4.726 4.726 0 00-8.638 0M48.944 33.404a4.726 4.726 0 00-8.638 0"
      />
    </g>
    <ellipse
      cx={36}
      cy={14.8}
      rx={25}
      ry={5.25}
      fill="none"
      stroke="#61b2e4"
      strokeMiterlimit={10}
      strokeWidth={2.1}
    />
  </svg>
);

export default SvgFaceSmiling9;
