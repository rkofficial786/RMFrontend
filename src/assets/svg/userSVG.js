import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const UserSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 22 22"
        fill="none"
      >
        <Path
          d="M11 0C12.4587 0 13.8576 0.579462 14.8891 1.61091C15.9205 2.64236 16.5 4.04131 16.5 5.5C16.5 6.95869 15.9205 8.35764 14.8891 9.38909C13.8576 10.4205 12.4587 11 11 11C9.54131 11 8.14236 10.4205 7.11091 9.38909C6.07946 8.35764 5.5 6.95869 5.5 5.5C5.5 4.04131 6.07946 2.64236 7.11091 1.61091C8.14236 0.579462 9.54131 0 11 0ZM11 22C11 22 22 22 22 19.25C22 15.95 16.6375 12.375 11 12.375C5.3625 12.375 0 15.95 0 19.25C0 22 11 22 11 22Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default UserSVG;
