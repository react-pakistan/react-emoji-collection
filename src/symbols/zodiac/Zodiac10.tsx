import * as React from "react";

const SvgZodiac10 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M12 12h48v48H12z" />
    <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
      <path strokeWidth={2} d="M12 12h48v48H12z" />
      <path
        strokeWidth={3}
        d="M37.81 24.19h9.996v9.996M24.19 47.81l23.62-23.62M38.41 43.44l-9.99-9.98"
      />
    </g>
  </svg>
);

export default SvgZodiac10;
