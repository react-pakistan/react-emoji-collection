import * as React from "react";

const SvgFaceSmiling1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={36} cy={36} r={23} fill="#fcea2b" />
    <g fill="none" stroke="#000" strokeLinecap="round" strokeWidth={2}>
      <circle cx={36} cy={36} r={23} strokeLinejoin="round" />
      <path
        strokeLinejoin="round"
        d="M45.815 45.227a15.43 15.43 0 01-19.63 0"
      />
      <path
        strokeMiterlimit={10}
        d="M31.694 33.404a4.726 4.726 0 00-8.638 0M48.944 33.404a4.726 4.726 0 00-8.638 0"
      />
    </g>
  </svg>
);

export default SvgFaceSmiling1;
