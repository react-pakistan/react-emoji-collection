import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgEvent1 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path
      fill="#FCEA2B"
      d="M48.713 23.515c-3.428-3.552-4.029-8.784-1.869-12.933l-3.6-3.732L6.886 41.936l3.801 3.94c4.073-1.574 8.868-.671 12.09 2.667 3.222 3.339 3.953 8.164 2.236 12.178l3.802 3.939 36.357-35.086-3.6-3.732c-4.225 2.011-9.431 1.225-12.86-2.327z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M48.155 23.505c-3.428-3.552-4.029-8.784-1.869-12.933l-3.6-3.732L6.328 41.926l3.801 3.94c4.072-1.574 8.868-.671 12.09 2.667s3.953 8.164 2.236 12.178l3.801 3.939 36.358-35.086-3.6-3.732c-4.225 2.011-9.431 1.225-12.86-2.327z"
    />
    <circle
      cx={37.122}
      cy={22.122}
      transform="rotate(-44.781 37.124 22.123)"
      r={2}
    />
    <circle
      cx={43.612}
      cy={28.661}
      transform="rotate(-44.781 43.614 28.661)"
      r={2}
    />
    <circle
      cx={50.101}
      cy={35.199}
      transform="rotate(-44.781 50.104 35.2)"
      r={2}
    />
  </svg>
);

export default SvgEvent1;
