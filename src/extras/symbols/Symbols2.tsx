import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgSymbols2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#F1B31C"
      d="M59.035 60h-46.07a.968.968 0 01-.965-.965v-46.07a.968.968 0 01.965-.965h46.07a.968.968 0 01.965.965v46.07a.968.968 0 01-.965.965z"
    />
    <circle cx={24.5} cy={47.5} r={4.5} fill="#fff" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M42 52c0-12.15-9.85-22-22-22v7c8.284 0 15 6.716 15 15h7z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M52 52c0-17.673-14.327-32-32-32v7c13.807 0 25 11.193 25 25h7z"
      clipRule="evenodd"
    />
    <g fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={2}>
      <path
        strokeMiterlimit={10}
        d="M59.035 60h-46.07a.968.968 0 01-.965-.965v-46.07a.968.968 0 01.965-.965h46.07a.968.968 0 01.965.965v46.07a.968.968 0 01-.965.965v0z"
      />
      <path
        strokeLinecap="round"
        d="M29 47.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
      />
      <path
        d="M41 52c0-11.598-9.402-21-21-21v6c8.284 0 15 6.716 15 15h6z"
        clipRule="evenodd"
      />
      <path
        d="M52 52c0-17.673-14.327-32-32-32v6.001c14.106.134 25.5 11.611 25.5 25.749l-.001.25H52z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

export default SvgSymbols2;
