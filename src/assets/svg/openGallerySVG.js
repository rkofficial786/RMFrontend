import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const OpenGallerySVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 22"
        fill="none"
      >
        <Path
          d="M5 17.3636V21H23V5.51818H19M2 16.4545L7 11L10 13.7273L14 9.18182L19 14.6364M1 1H19V17.3636H1V1ZM6 7.36364C6.26522 7.36364 6.51957 7.26786 6.70711 7.09737C6.89464 6.92688 7 6.69565 7 6.45455C7 6.21344 6.89464 5.98221 6.70711 5.81172C6.51957 5.64123 6.26522 5.54545 6 5.54545C5.73478 5.54545 5.48043 5.64123 5.29289 5.81172C5.10536 5.98221 5 6.21344 5 6.45455C5 6.69565 5.10536 6.92688 5.29289 7.09737C5.48043 7.26786 5.73478 7.36364 6 7.36364Z"
          stroke={color}
          strokeWidth="2"
        />
      </Svg>
    </View>
  );
};

export default OpenGallerySVG;
