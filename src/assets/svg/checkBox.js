import React from 'react';
import { View } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';

const CheckBoxSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Rect x="1" y="1" width="22" height="22" rx="2" fill={color} />
        <Rect x="1" y="1" width="22" height="22" rx="2" stroke={color} />
        <Path
          d="M19.2842 7.20492C19.1522 7.07367 18.9736 7 18.7874 7C18.6013 7 18.4227 7.07367 18.2906 7.20492L10.4686 14.9917L6.24055 10.7636C6.1116 10.6243 5.93261 10.542 5.74297 10.5348C5.55333 10.5275 5.36857 10.5958 5.22933 10.7248C5.0901 10.8538 5.00779 11.0327 5.00053 11.2224C4.99326 11.412 5.06162 11.5968 5.19058 11.736L10.4686 17L19.2842 8.20557C19.3503 8.14006 19.4027 8.06212 19.4385 7.97625C19.4742 7.89037 19.4927 7.79827 19.4927 7.70524C19.4927 7.61221 19.4742 7.52011 19.4385 7.43424C19.4027 7.34836 19.3503 7.27043 19.2842 7.20492Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default CheckBoxSVG;
