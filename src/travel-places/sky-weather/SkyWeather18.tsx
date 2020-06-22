import * as React from "react";

const SvgSkyWeather18 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#fcea2b" d="M49.452 44.876a1.5 1.5 0 000-3 1.5 1.5 0 000 3z" />
    <path
      fill="#fcea2b"
      stroke="#fcea2b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M64 36A28 28 0 0036 8v56a28 28 0 0028-28z"
    />
    <path
      fill="#3f3f3f"
      stroke="#3f3f3f"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 36a28 28 0 0028 28V8A28 28 0 008 36z"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <circle cx={36} cy={36} r={28} />
      <path d="M64 36A28 28 0 0036 8v56a28 28 0 0028-28z" />
    </g>
  </svg>
);

export default SvgSkyWeather18;
