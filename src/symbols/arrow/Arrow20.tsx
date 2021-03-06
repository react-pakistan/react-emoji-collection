import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgArrow20 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#3F3F3F"
      d="M40.184 12L26.13 26.859l3.729 3.413 7.51-7.944V38.82c0 10.524-5.76 15.639-17.609 15.639h-1V60h1c14.99 0 23.246-7.522 23.246-21.18V22.333l7.508 7.939 3.728-3.413L40.184 12z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M40.184 12L26.13 26.859l3.729 3.413 7.51-7.944V38.82c0 10.524-5.76 15.639-17.609 15.639h-1V60h1c14.99 0 23.246-7.522 23.246-21.18V22.333l7.508 7.939 3.728-3.413L40.184 12z"
    />
  </svg>
);

export default SvgArrow20;
