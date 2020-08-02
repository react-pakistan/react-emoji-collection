import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgArrow8 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#3F3F3F"
      d="M22.788 51.534L5 35.036l17.788-16.498 3.789 4.076-10.396 9.641H67v5.562H16.18l10.397 9.642z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M22.788 51.534L5 35.036l17.788-16.498 3.789 4.076-10.396 9.641H67v5.562H16.18l10.397 9.642z"
    />
  </svg>
);

export default SvgArrow8;
