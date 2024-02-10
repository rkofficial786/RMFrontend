import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DownArrowSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 11"
        fill="none"
      >
        <Path
          d="M19 1L10 10L1 1"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default DownArrowSVG;
