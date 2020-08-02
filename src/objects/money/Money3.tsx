import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgMoney3 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#FFF" d="M11.354 20.134h48.742v32.634H11.354z" />
    <path fill="#EA5A47" d="M15.33 24.4h40.032v24.2H15.33z" />
    <path fill="#F4AA41" d="M55.82 20.62h4.63v.19h-4.63z" />
    <circle cx={46.302} cy={34.578} r={5.933} fill="#FFF" />
    <path
      fill="#D0CFCE"
      d="M37.494 21.951V51.05c0 .104-.02.2-.05.295a1 1 0 01-.95.656h-15.34a1 1 0 01-.95-.656.963.963 0 01-.05-.295V21.952c0-.105.02-.2.05-.295a1 1 0 01.95-.657h15.34a1 1 0 01.95.656c.03.096.05.19.05.296z"
    />
    <g fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2}>
      <circle cx={46.302} cy={34.578} r={5.933} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M37.494 21.951V51.05c0 .104-.02.2-.05.295a1 1 0 01-.95.656h-15.34a1 1 0 01-.95-.656.963.963 0 01-.05-.295V21.952c0-.105.02-.2.05-.295a1 1 0 01.95-.657h15.34a1 1 0 01.95.656c.03.096.05.19.05.296z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M29.037 41v-3.87l2.58-5.16-2.58 5.16-2.58-5.16M26.588 36.468h4.863M15.706 52.079h-3.63a1 1 0 01-1-1v-29.2a1 1 0 011-1h3.63M42 21l17.446-.122a1 1 0 011 1V51.08a1 1 0 01-1 1L42 52"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M42 25.156h13.817V47.83H42M15.706 48V25.156"
      />
    </g>
  </svg>
);

export default SvgMoney3;
