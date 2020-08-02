import * as React from "react";
import { IEmojiProps } from "../../styled";

const SvgZodiac1 = (props: IEmojiProps) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M12 12h48v48H12z" />
    <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
      <path strokeWidth={2} d="M12 12h48v48H12z" />
      <path
        strokeWidth={3}
        d="M35.23 44.91l.125-13.68M26.31 44.91V30.88c-.145-1.558-.626-3.32-2.212-5.754"
      />
      <path
        strokeWidth={3}
        d="M26.31 31.22s.766-6.485 4.523-6.437 4.405 4.103 4.523 6.437c.183-2.264.916-6.54 4.478-6.544 3.562-.004 4.31 3.958 4.478 6.544V44.9c.365 2.829 2.394 5.11 3.83 5.112 3.041.488 3.963-9.966 1.123-10.73-3.348-.579-5.387 7.691-7.545 13.16"
      />
    </g>
  </svg>
);

export default SvgZodiac1;
