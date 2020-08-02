import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgFaceNegative2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#FCEA2B"
      d="M36 13c-12.682 0-23 10.318-23 23s10.318 23 23 23 23-10.318 23-23-10.318-23-23-23z"
    />
    <path
      fill="#FFF"
      d="M40.945 46.7h-9.89c-1.28 0-2.327-1.485-2.327-3.3 0-1.815 1.047-3.3 2.327-3.3h9.89c1.28 0 2.328 1.485 2.328 3.3 0 1.815-1.048 3.3-2.328 3.3z"
    />
    <g>
      <circle
        cx={36}
        cy={36}
        r={23}
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path d="M30 31.925a3.001 3.001 0 01-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3M48 31.925a3.001 3.001 0 01-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3" />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={2}
        strokeWidth={2}
        d="M40.945 46.7h-9.89c-1.28 0-2.327-1.485-2.327-3.3h0c0-1.815 1.047-3.3 2.327-3.3h9.89c1.28 0 2.328 1.485 2.328 3.3h0c0 1.815-1.048 3.3-2.328 3.3z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M23 23.113l7 4M49 23.113l-7 4M55.295 8.829v4.324"
      />
      <circle cx={55.295} cy={15.829} r={1} />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M62.317 16.829l-1.064 7M65.433 16.829l-1.065 7M60.035 18.779l7.081-.007M59.57 21.86l7.08-.007"
      />
    </g>
  </svg>
);

export default SvgFaceNegative2;
