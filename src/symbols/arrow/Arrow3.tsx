import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgArrow3 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#3f3f3f"
      d="M15.74 31.83v-6.134h27.84v-8.433l12.66 11.5-12.66 11.5V31.83H15.74"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M15.75 31.83h27.84v8.433l12.66-11.5-12.66-11.5v8.433H15.75zM23.65 46.72a3.049 3.049 0 00-3.073-1.994v0c-1.732 0-3.137 1.118-3.137 2.498s1.404 2.498 3.137 2.498l-.064.01c1.733 0 3.137 1.117 3.137 2.497s-1.404 2.498-3.137 2.498v0a3.049 3.049 0 01-3.073-1.994M46.64 54.643v-10l7.14 10v-10M40.21 54.61v0a3.572 3.572 0 01-3.572-3.571v-2.857a3.572 3.572 0 013.572-3.571v0a3.571 3.571 0 013.571 3.571v2.857a3.571 3.571 0 01-3.571 3.571zM30.21 54.61v0a3.572 3.572 0 01-3.572-3.571v-2.857a3.572 3.572 0 013.572-3.571v0a3.571 3.571 0 013.571 3.571v2.857a3.571 3.571 0 01-3.571 3.571z" />
    </g>
  </svg>
);

export default SvgArrow3;
