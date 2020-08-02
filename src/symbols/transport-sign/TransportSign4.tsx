import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgTransportSign4 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#61b2e4"
      d="M60 61H12a1 1 0 01-1-1V12a1 1 0 011-1h48a1 1 0 011 1v48a1 1 0 01-1 1z"
    />
    <path
      fill="#fff"
      d="M43.2 40.83l-.634-15.2c-.091-1.839-2.366-3.982-4.166-4h-4.8c-1.8.018-4.075 2.161-4.166 4l-.633 15.2c-.005.104.616.67.574.765l2.524-1.98-.746 17.69c-.026.252.212.521.365.72.03.039.074.064.122.072.171 0 .526-.342.589-.9l2.034-18.03a3.94 3.94 0 01.281-1.074l.788-.498h1.3l.58.644c.122.315.282.617.321.954l2.32 18c.063.56.416.9.587.9a.194.194 0 00.122-.072.986.986 0 00.2-.703l-.57-17.71 2.4 1.945c-.058-.107.615-.607.61-.73z"
    />
    <circle cx={36} cy={16.08} r={2.375} fill="#fff" />
    <g fill="none" stroke="#000" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M60 61H12a1 1 0 01-1-1V12a1 1 0 011-1h48a1 1 0 011 1v48a1 1 0 01-1 1z"
      />
      <circle cx={36} cy={16.01} r={2.375} strokeMiterlimit={10} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M40 26.36l1.52 30.4c.044.88-.46 1.6-1.12 1.6a1.66 1.66 0 01-1.383-1.59l-2.031-17.62c-.1-.874-.543-1.59-.983-1.59s-.88.715-.983 1.59l-2.034 17.62a1.661 1.661 0 01-1.383 1.59c-.66 0-1.164-.72-1.12-1.6l1.52-30.4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M43.2 40.76l-.634-15.2a4.22 4.22 0 00-4.166-4h-4.8a4.218 4.218 0 00-4.166 4l-.633 15.2"
      />
    </g>
  </svg>
);

export default SvgTransportSign4;
