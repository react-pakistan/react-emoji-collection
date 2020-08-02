import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgPhone5 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#9B9B9A"
      d="M54.07 59H27.68a.805.805 0 01-.805-.805v-45.39c0-.445.36-.805.805-.805h26.39c.444 0 .805.36.805.805v45.39c0 .444-.36.805-.805.805z"
    />
    <path
      fill="#D0CFCE"
      d="M50.594 52.053H31.156a.781.781 0 01-.781-.781V18.834c0-.431.35-.781.781-.781h19.438c.431 0 .78.35.78.781v32.438c0 .431-.349.781-.78.781z"
    />
    <path fill="#FFF" d="M37 15h8-8z" />
    <g stroke="#000" strokeMiterlimit={10}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M54.07 59H27.68a.805.805 0 01-.805-.805v-45.39c0-.445.36-.805.805-.805h26.39c.444 0 .805.36.805.805v45.39c0 .444-.36.805-.805.805z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M50.594 52.053H31.156a.781.781 0 01-.781-.781V18.834c0-.431.35-.781.781-.781h19.438c.431 0 .78.35.78.781v32.438c0 .431-.349.781-.78.781z"
      />
      <circle cx={41} cy={55.5} r={1.5} />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M37 15h8-8z"
      />
      <path d="M16.53 42.751L17.64 44l7.86-8.497L17.635 27l-1.105 1.24 5.165 5.55c.147.157.17.443.052.638-.065.106-.163.168-.265.168H6.5v1.813h14.967c.189 0 .341.203.341.453a.522.522 0 01-.127.353L16.53 42.75z" />
    </g>
  </svg>
);

export default SvgPhone5;
