import * as React from "react";

const SvgArrow16 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#3F3F3F"
      d="M37.836 14.039l-24.229-.897.897 24.229 5.558-.206-.524-14.16L55.43 58.897l3.933-3.932L23.47 19.072l14.16.525z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M37.836 14.039l-24.229-.897.897 24.229 5.558-.206-.524-14.16L55.43 58.897l3.933-3.932L23.47 19.072l14.16.525z"
    />
  </svg>
);

export default SvgArrow16;
