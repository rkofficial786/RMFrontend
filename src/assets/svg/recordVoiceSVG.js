import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G, Mask } from 'react-native-svg';

const RecordVoiceSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 22"
        fill="none"
      >
        <Mask
          id="mask0_202_179"
          maskType="luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="22"
        >
          <Path
            d="M14.2002 4.5C14.2002 2.567 12.3198 1 10.0002 1C7.68058 1 5.80017 2.567 5.80017 4.5V11C5.80017 12.933 7.68058 14.5 10.0002 14.5C12.3198 14.5 14.2002 12.933 14.2002 11V4.5Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <Path
            d="M1 10.5C1 14.642 5.0296 18 10 18M10 18C14.9704 18 19 14.642 19 10.5M10 18V21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Mask>
        <G mask="url(#mask0_202_179)">
          <Path d="M-4.39984 -1H24.4002V23H-4.39984V-1Z" fill={color} />
        </G>
      </Svg>
    </View>
  );
};

export default RecordVoiceSVG;
