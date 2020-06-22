import * as React from "react";

const SvgPlaceReligious2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#3F3F3F" d="M16.5 16h39v39h-39z" />
    <path fill="#F1B31C" d="M16.5 23h39v4h-39z" />
    <path fill="#9B9B9A" d="M22.5 47h5v8h-5z" />
    <path fill="#F1B31C" d="M36 31l-2 3.5 2 3.5 2-3.5z" />
    <circle cx={25} cy={34.5} r={2.5} fill="#F1B31C" />
    <circle cx={46.5} cy={34.5} r={2.5} fill="#F1B31C" />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M16.5 16h39v39h-39z" />
      <path d="M16.5 23h39v4h-39zM22.5 47h5v8h-5zM36 31l-2 3.5 2 3.5 2-3.5z" />
      <circle cx={25} cy={34.5} r={2.5} />
      <circle cx={46.5} cy={34.5} r={2.5} />
    </g>
  </svg>
);

export default SvgPlaceReligious2;
