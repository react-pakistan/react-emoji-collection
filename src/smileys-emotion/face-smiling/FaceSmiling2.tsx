import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgFaceSmiling2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={36} cy={36} r={23} fill="#FCEA2B" />
    <path
      fill="#FFF"
      d="M50.595 41.64a11.557 11.557 0 01-.87 4.49c-12.49 3.03-25.43.34-27.49-.13a11.435 11.435 0 01-.83-4.36h.11s14.8 3.59 28.89.07l.19-.07z"
    />
    <path
      fill="#EA5A47"
      d="M49.725 46.13c-1.79 4.27-6.35 7.23-13.69 7.23-7.41 0-12.03-3.03-13.8-7.36 2.06.47 15 3.16 27.49.13z"
    />
    <g>
      <circle
        cx={36}
        cy={36}
        r={23}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M50.595 41.64a11.557 11.557 0 01-.87 4.49c-12.49 3.03-25.43.34-27.49-.13a11.435 11.435 0 01-.83-4.36h.11s14.8 3.59 28.89.07l.19-.07z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M49.725 46.13c-1.79 4.27-6.35 7.23-13.69 7.23-7.41 0-12.03-3.03-13.8-7.36 2.06.47 15 3.16 27.49.13z"
      />
      <path d="M30 31a3.001 3.001 0 01-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3M48 31a3.001 3.001 0 01-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3" />
    </g>
  </svg>
);

export default SvgFaceSmiling2;
