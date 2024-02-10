import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';

const MessageSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 70 70" fill="none">
        <Rect width="70" height="70" rx="35" fill={color} />
        <Path
          d="M28.6944 45L35.5 52L42.3056 45H49.1111C51.2558 45 53 43.4303 53 41.5V20.5C53 18.5697 51.2558 17 49.1111 17H21.8889C19.7442 17 18 18.5697 18 20.5V41.5C18 43.4303 19.7442 45 21.8889 45H28.6944ZM25.7778 25.75H45.2222V29.25H25.7778V25.75ZM25.7778 32.75H39.3889V36.25H25.7778V32.75Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default MessageSVG;
