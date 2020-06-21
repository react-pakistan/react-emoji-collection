import * as React from "react";

const SvgZodiac8 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#b399c8" d="M12 12h48v48H12z" />
    <g fill="none" stroke="#000" strokeLinecap="round">
      <path
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M36 48.84c3.087-16.36 6.337-26.33 11.64-25.68 2.611.586 3.711 3.609 2.58 5.817"
      />
      <path strokeLinejoin="round" strokeWidth={2} d="M12 12h48v48H12z" />
      <path
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M36 48.84c-3.087-16.36-6.337-26.33-11.64-25.68-2.611.586-3.711 3.609-2.58 5.817"
      />
    </g>
  </svg>
);

export default SvgZodiac8;
