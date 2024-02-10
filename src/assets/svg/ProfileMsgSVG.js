import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ProfileMsgSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
        <Path
          d="M6.72222 17.6L11 22L15.2778 17.6H19.5556C20.9037 17.6 22 16.6133 22 15.4V2.2C22 0.9867 20.9037 0 19.5556 0H2.44444C1.09633 0 0 0.9867 0 2.2V15.4C0 16.6133 1.09633 17.6 2.44444 17.6H6.72222ZM4.88889 5.5H17.1111V7.7H4.88889V5.5ZM4.88889 9.9H13.4444V12.1H4.88889V9.9Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default ProfileMsgSVG;
