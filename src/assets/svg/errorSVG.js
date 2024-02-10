import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';
import { colors } from '../../constants/color';

const ErrorSVG = ({ width, height, color = 'red' }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
    >
      <Rect width="26" height="26" rx="13" fill={color} />
      <Path
        d="M18 8L8 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8L18 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ErrorSVG;
