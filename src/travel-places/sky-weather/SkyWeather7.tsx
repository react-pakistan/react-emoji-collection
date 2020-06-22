import * as React from "react";

const SvgSkyWeather7 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle
      cx={36}
      cy={36}
      r={28}
      fill="#fcea2b"
      stroke="#fcea2b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      fill="#f1b31c"
      opacity={0.4}
      d="M29 62c20.003 0 16.663-52 16.663-52s24.959 7 16.64 35S13.4 62 29 62z"
    />
    <circle cx={26.5} cy={27.5} r={5} fill="#fff" />
    <circle cx={45.5} cy={27.5} r={5} fill="#fff" />
    <g stroke="#000" strokeLinecap="round" strokeLinejoin="round">
      <path strokeWidth={0.25} d="M34 37h4v2h-4z" />
      <path
        fill="none"
        strokeWidth={2}
        d="M36 64a28 28 0 010-56M36 8a28 28 0 010 56"
      />
      <path
        fill="none"
        strokeWidth={2}
        d="M36 39.5c1.105 0 2.5-.895 2.5-2H34a2 2 0 002 2zM26.92 45.92s3.705 3.389 9.652 3.771c6.942.314 10.42-3.695 10.42-3.695"
      />
      <circle cx={26.5} cy={27.5} r={5} fill="none" strokeWidth={2} />
      <circle cx={45.5} cy={27.5} r={5} fill="none" strokeWidth={2} />
      <circle cx={45.5} cy={27.5} r={5} fill="none" />
      <circle cx={43.45} cy={27.75} r={1.75} strokeWidth={2} />
      <circle cx={26.5} cy={27.5} r={5} fill="none" />
      <circle cx={24.25} cy={27.75} r={1.75} strokeWidth={2} />
    </g>
  </svg>
);

export default SvgSkyWeather7;
