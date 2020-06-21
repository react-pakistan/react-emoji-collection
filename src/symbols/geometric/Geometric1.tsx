import * as React from "react";

const SvgGeometric1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#92d3f5"
      d="M12.065 36.5l24.218-24.217L60.5 36.5 36.283 60.718z"
    />
    <path fill="#e27022" d="M31.757 32.757h8.485v8.485h-8.485z" />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M32 33l-7.5-7.5M40 33l8.5-8.5M40 41l7.5 7.5M32 41l-7.5 7.5M12.065 36.5l24.218-24.217L60.5 36.5 36.283 60.718z" />
      <path d="M31.757 32.757h8.485v8.485h-8.485z" />
    </g>
  </svg>
);

export default SvgGeometric1;
