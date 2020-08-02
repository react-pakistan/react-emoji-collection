import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgWarning2 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <circle cx={36} cy={36} r={26} fill="#fff" />
    <path
      fill="#ea5a47"
      d="M36 7C19.98 7 7 19.98 7 36s12.98 29 29 29 29-12.98 29-29S52.02 7 36 7zM10.79 36.27c0-5.075 3.417-12.69 6.202-16.49l35.2 35.27c-3.805 2.784-10.93 5.904-16.01 5.904-12.7 0-25.39-11.98-25.39-24.68zm44.87 15.18L20.6 16.32c3.805-2.784 10.77-5.441 15.84-5.441 12.7 0 24.68 12.25 24.68 24.95 0 5.075-2.686 11.81-5.47 15.62z"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <circle cx={36} cy={36} r={30} />
      <path d="M55.66 51.44A24.99 24.99 0 0020.6 16.31zM16.99 19.77a24.99 24.99 0 0035.2 35.27z" />
    </g>
  </svg>
);

export default SvgWarning2;
