import * as React from "react";

const SvgZodiac13 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M12 12h48v47.83H12z" />
    <g fill="none" stroke="#000" strokeLinecap="round">
      <path strokeLinejoin="round" strokeWidth={2} d="M12 12h48v48H12z" />
      <path
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M23.39 50.52s7.057-4.043 6.983-14.52c.073-10.48-6.983-14.52-6.983-14.52M48.61 21.48S41.553 25.523 41.626 36c-.072 10.48 6.984 14.52 6.984 14.52"
      />
      <path strokeLinejoin="round" strokeWidth={3} d="M48.18 36.52H23.82" />
    </g>
  </svg>
);

export default SvgZodiac13;
