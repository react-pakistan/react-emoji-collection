import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgEmergency12 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={35.905} cy={36.014} r={27.035} fill="#fcea2b" />
    <circle cx={36.006} cy={36.037} r={21.871} fill="#fff" />
    <g>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M55.11 25.38a21.863 21.863 0 11-8.095-8.245M62.94 35.997a27.046 27.046 0 11-5.266-16.038"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M47.394 21.578l11.038-1.16-1.16-11.038M49.975 36.354H35.891V18.52M35.891 53.911v-3.845M21.143 36.354h-3.057 0"
      />
      <circle cx={35.891} cy={36.354} r={3.737} />
      <circle cx={48.694} cy={47.937} r={1.48} />
      <circle cx={23.087} cy={24.717} r={1.48} />
      <circle cx={23.087} cy={47.937} r={1.48} />
    </g>
  </svg>
);

export default SvgEmergency12;
