import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgAwardMedal6 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#e27022" d="M28.028 22.427V17h15.944v5.427" />
    <circle cx={36} cy={45.021} r={23} fill="#e27022" />
    <path
      fill="#92d3f5"
      stroke="#92d3f5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.8}
      d="M54.999 4.022L43 16.021h-7l-5.042-5.042 6.963-6.962h17.078"
    />
    <path
      fill="#ea5a47"
      stroke="#ea5a47"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.8}
      d="M23.983 4.004L36 16.02h-7L16.968 3.988h7.015"
    />
    <g fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2}>
      <circle cx={36} cy={45.021} r={23} />
      <circle
        cx={36}
        cy={45.021}
        r={23}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M29 19v-2.979M43 19v-2.979M29 16.021h14M25.99 13.01l-9.022-9.022M31.99 12.01l-8.007-8.006M34 8l3.921-3.983M46 13l8.999-8.978M16.968 3.988h7.015M37.921 4.017h17.078M28.833 52.81c.684 2.962 3.64 5.19 7.182 5.19h0c4.05 0 7.332-2.91 7.332-6.5S40.065 45 36.015 45c4.05 0 7.332-2.91 7.332-6.5S40.065 32 36.015 32h0c-3.543 0-6.499 2.228-7.182 5.19"
      />
    </g>
  </svg>
);

export default SvgAwardMedal6;
