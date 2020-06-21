import * as React from "react";

const SvgArrow4 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#3f3f3f"
      d="M35.991 14L23 28.516h9.527L32.69 40h6.793l-.027-11.484h9.526L35.991 14"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M35.991 14L23 28.516h9.527L32.69 40h6.793l-.027-11.484h9.526L35.991 14M36.33 55.47h0a3.571 3.571 0 01-3.571-3.571V49.04a3.571 3.571 0 013.571-3.571h0a3.571 3.571 0 013.571 3.571V51.9a3.571 3.571 0 01-3.571 3.571zM24.143 45.5h5.714M27 45.5v10M43.142 55.47v-10h3.813a2.49 2.49 0 012.49 2.49h0a2.49 2.49 0 01-2.49 2.491h-3.813" />
    </g>
  </svg>
);

export default SvgArrow4;
