import * as React from "react";

const SvgArrow1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#3f3f3f"
      d="M56.25 31.81v-6.134H28.41v-8.433l-12.66 11.5 12.66 11.5V31.81z"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M56.25 31.81H28.41v8.433l-12.66-11.5 12.66-11.5v8.433h27.84zM28.52 44.7h-5.714v10h5.714M22.81 49.7h4.286M33 54.75v-10l7.143 10v-10M45.06 44.68h4.383a2.08 2.08 0 012.08 2.08v5.841a2.08 2.08 0 01-2.08 2.08H45.06v-10z" />
    </g>
  </svg>
);

export default SvgArrow1;
