import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgFoodDrink1 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <g stroke="#000" strokeLinejoin="round" strokeWidth={2}>
      <circle
        cx={36}
        cy={36}
        r={2.403}
        fillRule="evenodd"
        strokeMiterlimit={10}
      />
      <path
        fill="none"
        d="M28.46 17.87l15.07 36.39M17.73 43.54L54.1 28.47M17.75 28.44l36.31 15.04M43.43 17.96L28.46 54.09"
      />
    </g>
    <circle cx={35.68} cy={36} r={2} fill="#ffa7c0" />
    <circle cx={36} cy={36} r={26} fill="#e27022" />
    <circle cx={36} cy={36} r={19.63} fill="#f1b31c" />
    <path
      fill="none"
      stroke="#e27022"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28.46 17.87l15.07 36.39M43.43 17.96L28.46 54.09M17.73 43.54L54.1 28.47M17.75 28.44l36.31 15.04"
    />
    <circle
      cx={36}
      cy={36}
      r={2.403}
      fill="#e27022"
      fillRule="evenodd"
      stroke="#e27022"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <g fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2}>
      <path d="M62 36a26 26 0 01-26 26 26 26 0 01-26-26 26 26 0 0126-26 26 26 0 0126 26" />
      <path d="M55.63 36A19.63 19.63 0 0136 55.63 19.63 19.63 0 0116.37 36 19.63 19.63 0 0136 16.37 19.63 19.63 0 0155.63 36" />
    </g>
  </svg>
);

export default SvgFoodDrink1;
