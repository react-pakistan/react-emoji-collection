import * as React from "react";

const SvgAwardMedal5 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 72 72" width="1em" height="1em" {...props}>
    <path fill="#9b9b9a" d="M28.057 22.427V17h15.858v5.427" />
    <path
      fill="#92d3f5"
      stroke="#92d3f5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.8}
      d="M54.999 4.022L43 16.021h-7l-5.042-5.042 6.963-6.962h17.078"
    />
    <path
      fill="#ea5a47"
      stroke="#ea5a47"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.8}
      d="M23.983 4.004L36 16.02h-7L16.968 3.988h7.015"
    />
    <circle cx={36} cy={44.975} r={23} fill="#9b9b9a" />
    <g fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2}>
      <circle cx={36} cy={44.975} r={23} />
      <circle
        cx={36}
        cy={44.975}
        r={23}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M29 19v-2.979M43 19v-2.979M29 16.021h14M25.99 13.01l-9.022-9.022M31.99 12.01l-8.007-8.006M34 8l3.921-3.983M46 13l8.999-8.978M16.968 3.988h7.015M37.921 4.017h17.078M28.322 38.377A7.99 7.99 0 0136.146 32h0c2.205 0 4.202.894 5.647 2.34 2.248 2.248 2.04 5.983-.069 8.362L28.16 58h15.972"
      />
    </g>
  </svg>
);

export default SvgAwardMedal5;
