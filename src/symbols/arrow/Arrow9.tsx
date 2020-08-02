import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgArrow9 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#3F3F3F"
      d="M19.502 22.824L36 5.036l16.498 17.788-4.076 3.789-9.641-10.396v50.82h-5.562v-50.82l-9.641 10.396z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M19.502 22.824L36 5.036l16.498 17.788-4.076 3.789-9.641-10.396v50.82h-5.562v-50.82l-9.641 10.396z"
    />
  </svg>
);

export default SvgArrow9;
