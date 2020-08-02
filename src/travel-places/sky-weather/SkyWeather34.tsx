import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgSkyWeather34 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={35.5} cy={35.958} r={21.538} fill="#ea5a47" />
    <path
      fill="#d22f27"
      d="M39.925 15.078a21.535 21.535 0 01-16.643 38.808 21.535 21.535 0 1016.643-38.808z"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <circle cx={35.5} cy={35.958} r={21.538} />
      <path d="M48.215 14.657c3.57-1.117 6.428-1.003 8.03.599 4.205 4.205-1.846 17.075-13.516 28.746s-24.54 17.721-28.746 13.516c-1.84-1.84-1.717-5.336-.021-9.664" />
    </g>
  </svg>
);

export default SvgSkyWeather34;
