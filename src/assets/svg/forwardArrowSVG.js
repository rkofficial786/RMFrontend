import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ForwardArrowSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 30 30"
        fill="none"
      >
        <Path
          d="M2.72727 29.9999C2.36959 30.0023 2.01495 29.9635 1.68616 29.8861C1.35737 29.8087 1.0617 29.6943 0.818182 29.5503C-0.272727 28.951 -0.272727 28.0219 0.818182 27.4225L23.4545 14.985L0.818182 2.57741C-0.272727 1.97801 -0.272727 1.04895 0.818182 0.449549C1.90909 -0.14985 3.6 -0.14985 4.69091 0.449549L29.1818 13.966C30.2727 14.5654 30.2727 15.4944 29.1818 16.0938L4.63636 29.5503C4.09091 29.85 3.38182 29.9999 2.72727 29.9999Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default ForwardArrowSVG;
