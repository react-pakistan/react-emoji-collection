import * as React from "react";

const SvgGeometric4 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={36} cy={36} r={28} fill="#b1cc33" />
    <circle
      cx={36}
      cy={36}
      r={28}
      fill="none"
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGeometric4;
