import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PermissionsSVG = ({ width, height, color }) => {
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
          d="M17.465 23.6081H12.4749V18.2762H17.465V23.6081ZM23.7776 23.6081H18.7876V18.2762H23.7776V23.6081ZM11.1523 23.6081H6.16232V18.2762H11.1523V23.6081ZM23.7776 6.74516V16.5739H6.16235V6.74516H23.7776ZM26.3026 3.9186H3.6974V26.0814H26.3026L26.3026 3.9186ZM0 29.9999V0H30V30L0 29.9999Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default PermissionsSVG;
