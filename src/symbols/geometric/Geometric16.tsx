import * as React from "react";

const SvgGeometric16 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={36} cy={36} r={22} fill="#3F3F3F" />
    <circle cx={36} cy={36} r={12.756} fill="#9B9B9A" />
    <g fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2}>
      <circle cx={36} cy={36} r={22} />
      <circle cx={36} cy={36} r={12.756} />
    </g>
  </svg>
);

export default SvgGeometric16;
