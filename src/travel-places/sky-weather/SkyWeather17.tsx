import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgSkyWeather17 = (props: IEmojiProps) => (
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
      d="M55 35a28.001 28.001 0 01-26.547 27.963A28 28 0 1036 8q-.731 0-1.454.037A28.006 28.006 0 0155 35z"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <circle cx={36} cy={36} r={28} />
      <path d="M55 35a28.001 28.001 0 01-26.547 27.963A28 28 0 1036 8q-.731 0-1.454.037A28.006 28.006 0 0155 35z" />
    </g>
  </svg>
);

export default SvgSkyWeather17;
