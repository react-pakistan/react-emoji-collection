import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgAlphanum2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <rect
      x={11.168}
      y={11.09}
      rx={1.699}
      width={48.984}
      height={48.984}
      fill="#d0cfce"
    />
    <g fill="none" stroke="#000" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M37.932 51.824V36.539h12.14v15.285"
      />
      <path strokeMiterlimit={5} d="M37.932 41.433h12.14" />
      <path
        strokeLinecap="round"
        strokeMiterlimit={5}
        d="M23.834 30.254h8.898M24.279 41.567l8.475-2.708"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M50.072 26.257v3.997h-12.14V19.615M28.476 19.615v31.509h-7.229"
      />
      <path strokeMiterlimit={5} d="M37.932 46.736h12.14" />
      <path
        strokeLinecap="round"
        strokeMiterlimit={5}
        d="M37.932 25.533l10.056-3.013"
      />
      <rect
        x={11.168}
        y={11.09}
        rx={1.699}
        width={48.984}
        height={48.984}
        strokeMiterlimit={10}
      />
    </g>
  </svg>
);

export default SvgAlphanum2;
