import * as React from "react";

const SvgZodiac11 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M12 12h48v48H12z" />
    <g fill="none" stroke="#000">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12h48v48H12z"
      />
      <path
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M39.5 44.55a5.591 5.591 0 115.59 5.591 5.592 5.592 0 01-5.59-5.591z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M39.5 42.55c-1.351 4.101-1.244 3.865-3.324 8.743M28.06 44.89V30.86c-.145-1.558-.626-3.32-2.212-5.754"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M28.06 30.86c.234-2.264 1.17-6.54 5.72-6.544 4.55-.004 5.505 3.958 5.719 6.544v13.68"
      />
    </g>
  </svg>
);

export default SvgZodiac11;
