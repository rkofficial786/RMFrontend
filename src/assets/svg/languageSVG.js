import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const LanguageSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
      >
        <Path
          d="M1 16C1 24.2845 7.7155 31 16 31C24.2845 31 31 24.2845 31 16C31 7.7155 24.2845 1 16 1C7.7155 1 1 7.7155 1 16Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17.4998 1.07507C17.4998 1.07507 21.9998 7.00007 21.9998 16.0001C21.9998 25.0001 17.4998 30.9251 17.4998 30.9251M14.4998 30.9251C14.4998 30.9251 9.99982 25.0001 9.99982 16.0001C9.99982 7.00007 14.4998 1.07507 14.4998 1.07507M1.94482 21.2501H30.0548M1.94482 10.7501H30.0548"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default LanguageSVG;
