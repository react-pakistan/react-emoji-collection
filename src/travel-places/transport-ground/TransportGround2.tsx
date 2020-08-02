import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgTransportGround2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#d22f27"
      d="M5 50.77s-1.552 4.167.031 4.167h55.583l1.834-2h4.5l.416-9.832-.833-6.667-9.167-.584-2.833 1.084-.073 1.917 5.229 5.063-3.906.02s-.748-2-3.082-2.585-11.167-2.417-11.167-2.417l-.583 4.5s-10.981-.02-14.396.44c-1.97.266-6.657.629-10.939 1.624-3.228.75-5.792 3.48-8.915 4.5L5 50.77z"
    />
    <path
      fill="#ea5a47"
      d="M10.22 53.376S4.437 54.46 6 53.084c0 0 3.969-2.647 13.612-2.897l-2.8 3.391-4.019 1.216-2.573-1.418zM41.563 43.688l.188-4.772 12.312 3.147L55.124 45h-9.5zM55.188 34.125L55 38h12l-.188-4z"
    />
    <circle cx={58.75} cy={52} r={2.828} fill="#d0cfce" />
    <circle cx={21.5} cy={52} r={2.828} fill="#d0cfce" />
    <g>
      <circle
        cx={22}
        cy={52}
        r={3}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={39} cy={42} r={3} />
      <circle
        cx={59}
        cy={52}
        r={3}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M65.625 52H67V35H55v3l3.188 3.108M16 53l-1 1H5v-4s13-6 26-6h20M29 54h24M41 43v-4s10 0 14 5"
      />
    </g>
  </svg>
);

export default SvgTransportGround2;
