import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const LeftArrowSVG = ({ width, height, color }) => {
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
          d="M19.375 22.5L11.875 15L19.375 7.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default LeftArrowSVG;
