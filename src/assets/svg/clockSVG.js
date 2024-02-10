import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ClockSVG = ({ width, height, color }) => {
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
          d="M15 28.125C7.7625 28.125 1.875 22.2375 1.875 15C1.875 7.7625 7.7625 1.875 15 1.875C22.2375 1.875 28.125 7.7625 28.125 15C28.125 22.2375 22.2375 28.125 15 28.125ZM15 3.75C8.79375 3.75 3.75 8.79375 3.75 15C3.75 21.2062 8.79375 26.25 15 26.25C21.2062 26.25 26.25 21.2062 26.25 15C26.25 8.79375 21.2062 3.75 15 3.75Z"
          fill={color}
        />
        <Path
          d="M18.7499 19.6875C18.5812 19.6875 18.4124 19.65 18.2624 19.5563L13.5749 16.7438C13.4361 16.6603 13.3215 16.542 13.2426 16.4006C13.1636 16.2591 13.1231 16.0995 13.1249 15.9375V8.4375C13.1249 7.9125 13.5374 7.5 14.0624 7.5C14.5874 7.5 14.9999 7.9125 14.9999 8.4375V15.4125L19.2374 17.9437C19.412 18.0507 19.5469 18.2117 19.6217 18.4022C19.6965 18.5928 19.7072 18.8025 19.6521 18.9997C19.597 19.1968 19.4791 19.3706 19.3163 19.4948C19.1535 19.6189 18.9546 19.6866 18.7499 19.6875Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default ClockSVG;
