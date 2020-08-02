import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgSkyWeather36 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#FCEA2B"
      d="M48.143 3.726L16.316 37.851c-.603.646-.114 1.659.801 1.659h19.107L19.15 67.048c-.166.268.215.537.443.312l36.063-35.704c.643-.638.162-1.689-.773-1.689h-18.5l11.76-26.24z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M48.163 4.44l-31.84 33.342c-.618.646-.117 1.659.82 1.659h19.082L17.921 68.274l37.727-36.479c.66-.637.167-1.688-.79-1.688H36.384L48.163 4.441z"
    />
  </svg>
);

export default SvgSkyWeather36;
