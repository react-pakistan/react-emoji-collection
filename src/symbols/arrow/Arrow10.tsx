import * as React from "react";

const SvgArrow10 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#3F3F3F"
      d="M52.498 49.249L36 67.036 19.502 49.25l4.076-3.79 9.641 10.396V5.036h5.562v50.82l9.641-10.396z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M52.498 49.249L36 67.036 19.502 49.25l4.076-3.79 9.641 10.396V5.036h5.562v50.82l9.641-10.396z"
    />
  </svg>
);

export default SvgArrow10;
