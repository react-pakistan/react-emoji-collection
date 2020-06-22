import * as React from "react";

const SvgSkyWeather23 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle
      cx={36}
      cy={36}
      r={28}
      fill="#3f3f3f"
      stroke="#3f3f3f"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      fill="#fcea2b"
      d="M17 37A28.001 28.001 0 0143.547 9.037 28 28 0 1036 64q.731 0 1.454-.037A28.006 28.006 0 0117 37z"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <circle cx={36} cy={36} r={28} />
      <path d="M17 37A28.001 28.001 0 0143.547 9.037 28 28 0 1036 64q.731 0 1.454-.037A28.006 28.006 0 0117 37z" />
    </g>
  </svg>
);

export default SvgSkyWeather23;
