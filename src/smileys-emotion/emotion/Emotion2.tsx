import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgEmotion2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#9B9B9A" d="M39.11 21.888l7.778-7.778 11 11-7.778 7.778z" />
    <path
      fill="#3F3F3F"
      d="M46.034 22.212l4.478-4.478 7.377 7.377-5.367 5.367z"
    />
    <circle cx={31.769} cy={40.404} r={23} fill="#9B9B9A" />
    <path
      fill="#3F3F3F"
      d="M19.633 55.737c12.703 0 23-10.297 23-23a22.904 22.904 0 00-5.21-14.576C47.286 20.754 54.56 29.73 54.56 40.404c0 12.702-10.297 23-23 23-7.17 0-13.572-3.282-17.79-8.424 1.873.492 3.837.757 5.864.757z"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M41.46 19.54l5.429-5.43 11 11-5.367 5.367" />
      <circle cx={31.769} cy={40.404} r={23} />
      <path d="M55.757 16.243l8.486-8.486" />
    </g>
  </svg>
);

export default SvgEmotion2;
