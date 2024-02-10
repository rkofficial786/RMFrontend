import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const FavouriteSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 26 24"
        fill="none"
      >
        <Path
          d="M7.6 1C3.95492 1 1 4.15642 1 8.05001C1 15.1 8.8 21.5091 13 23C17.2 21.5091 25 15.1 25 8.05001C25 4.15642 22.0451 1 18.4 1C16.1678 1 14.1944 2.1837 13 3.99549C11.8056 2.1837 9.83218 1 7.6 1Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default FavouriteSVG;
