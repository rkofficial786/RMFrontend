import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DownloadSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 30 30"
        fill={color}
      >
        <Path
          d="M28.125 10H20.625V0H9.375V10H1.875L15 23.3333L28.125 10ZM0 26.6667H30V30H0V26.6667Z"
          fill="#404040"
        />
      </Svg>
    </View>
  );
};

export default DownloadSVG;
