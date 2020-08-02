import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgWarning12 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={36} cy={36} r={23} fill="#f4aa41" />
    <g stroke="#000">
      <circle
        cx={35.96}
        cy={35.89}
        strokeMiterlimit={10}
        strokeWidth={1.25}
        r={3.281}
      />
      <path
        strokeMiterlimit={10}
        strokeWidth={1.254}
        d="M23.09 43.42a14.76 14.76 0 003.496 4.097l5.791-6.957a5.733 5.733 0 01-2.167-3.753l-8.921 1.537a14.76 14.76 0 001.8 5.076zM48.91 43.42a14.76 14.76 0 001.8-5.076l-8.921-1.537a5.733 5.733 0 01-2.167 3.753l5.791 6.957a14.76 14.76 0 003.496-4.097zM36 21.13a14.76 14.76 0 00-5.296.98l3.129 8.493a5.733 5.733 0 014.333 0l3.129-8.494a14.76 14.76 0 00-5.296-.979z"
      />
      <circle
        cx={36}
        cy={36}
        r={23}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgWarning12;
