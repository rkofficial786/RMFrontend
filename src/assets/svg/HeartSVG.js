import React from 'react';
import { Svg, Path } from 'react-native-svg';

const HeartSVG = ({ width, height, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
    >
      <Path
        d="M6.875 3.66666C4.09056 3.66666 1.83333 5.9239 1.83333 8.70832C1.83333 13.75 7.79167 18.3333 11 19.3995C14.2083 18.3333 20.1667 13.75 20.1667 8.70832C20.1667 5.9239 17.9094 3.66666 15.125 3.66666C13.4199 3.66666 11.9124 4.51315 11 5.80882C10.0876 4.51315 8.58014 3.66666 6.875 3.66666Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HeartSVG;
