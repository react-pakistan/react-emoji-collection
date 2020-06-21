import * as React from "react";

const SvgScience3 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={36.053} cy={36.332} r={21.581} fill="#d0cfce" />
    <circle cx={36.053} cy={36.332} r={16.939} fill="#92d3f5" />
    <g fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2}>
      <circle cx={36.053} cy={36.332} r={16.939} />
      <circle cx={36.053} cy={36.332} r={21.581} />
      <path
        strokeLinecap="round"
        d="M27.922 28.929l4.116-2.71M28.364 42.579l-1.436-4.714M45.73 34.557l-4.85-.866M40.416 44.41l1.261-4.763"
      />
      <circle cx={33.056} cy={35.069} r={0.829} strokeLinecap="round" />
      <circle cx={40.87} cy={27.549} r={0.829} strokeLinecap="round" />
      <circle cx={35.28} cy={47.539} r={0.829} strokeLinecap="round" />
    </g>
  </svg>
);

export default SvgScience3;
