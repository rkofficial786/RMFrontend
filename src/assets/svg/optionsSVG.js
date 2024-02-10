import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const OptionsSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 4 18" fill="none">
        <Path
          d="M1.75 4.32094C2.7165 4.32094 3.5 3.54204 3.5 2.58122C3.5 1.62039 2.7165 0.841492 1.75 0.841492C0.783502 0.841492 0 1.62039 0 2.58122C0 3.54204 0.783502 4.32094 1.75 4.32094Z"
          fill={color}
        />
        <Path
          d="M1.75 11.2798C2.7165 11.2798 3.5 10.5009 3.5 9.54011C3.5 8.57929 2.7165 7.80038 1.75 7.80038C0.783502 7.80038 0 8.57929 0 9.54011C0 10.5009 0.783502 11.2798 1.75 11.2798Z"
          fill={color}
        />
        <Path
          d="M1.75 17.6589C2.7165 17.6589 3.5 16.88 3.5 15.9191C3.5 14.9583 2.7165 14.1794 1.75 14.1794C0.783502 14.1794 0 14.9583 0 15.9191C0 16.88 0.783502 17.6589 1.75 17.6589Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default OptionsSVG;
