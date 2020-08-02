import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgSkyWeather16 = (props: IEmojiProps) => (
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
    <circle
      cx={36}
      cy={36}
      r={28}
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSkyWeather16;
