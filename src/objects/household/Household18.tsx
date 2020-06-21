import * as React from "react";

const SvgHousehold18 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#92d3f5"
      d="M32.5 22.5s0 38 1 42 4 4 5 0c2.03-8.123 1-42 1-42M22.5 15.5s10 5 10 7h7c0-1.699 7.214-5.562 9.388-6.687.385-.2.612-.313.612-.313z"
    />
    <rect
      x={20}
      y={6.5}
      rx={2.244}
      ry={2.244}
      width={32}
      height={9}
      fill="#d0cfce"
    />
    <g fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2}>
      <path
        strokeLinecap="round"
        d="M32.5 22.5s0 38 1 42 4 4 5 0c2.03-8.123 1-42 1-42"
      />
      <rect
        x={20}
        y={6.5}
        rx={2.244}
        ry={2.244}
        width={32}
        height={9}
        strokeLinecap="round"
      />
      <path
        strokeLinecap="round"
        d="M22.5 15.5s10 5 10 7M39.5 22.5c0-1.699 7.214-5.562 9.388-6.687.385-.2.612-.313.612-.313"
      />
      <path d="M20 11h32" />
    </g>
  </svg>
);

export default SvgHousehold18;
