import * as React from "react";

const SvgTool1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="none"
      stroke="#a57939"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.8}
      d="M51.88 55.586A27.017 27.017 0 0016.384 20.09"
    />
    <path
      fill="#d22f27"
      d="M31.128 40.842L24.03 47.94v6.852a.602.602 0 001.029.426l5.893-5.894a.603.603 0 00.176-.425z"
    />
    <path
      fill="#ea5a47"
      d="M31.128 40.842L24.03 47.94h-6.852a.602.602 0 01-.426-1.028l5.894-5.894a.603.603 0 01.426-.176z"
    />
    <g>
      <g fill="none" stroke="#000" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.228 21.517l31.226 31.225"
        />
        <path
          strokeMiterlimit={10}
          d="M50.218 57.249a2.352 2.352 0 01-.496-2.591 24.668 24.668 0 00-32.41-32.41 2.35 2.35 0 01-1.857-4.316 29.366 29.366 0 0138.583 38.582 2.353 2.353 0 01-3.82.735z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M57.966 14.064L22.158 49.872M52.596 14.064h5.37v5.089"
        />
      </g>
    </g>
  </svg>
);

export default SvgTool1;
