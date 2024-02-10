import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Defs, ClipPath, Rect, G } from 'react-native-svg';

const VideoCallSVG = ({ width, height, color }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 30 30"
        fill="none"
      >
        <G clipPath="url(#clip0_300_153)">
          <Path
            d="M17.5104 5H2.48958C1.11458 5 0 6.11458 0 7.48958V22.5104C0 23.8854 1.11458 25 2.48958 25H17.5104C18.8854 25 20 23.8854 20 22.5104V7.48958C20 6.11458 18.8854 5 17.5104 5ZM27.375 6.96354L21.6667 10.901V19.099L27.375 23.0312C28.4792 23.7917 30 23.0156 30 21.6875V8.30729C30 6.98438 28.4844 6.20312 27.375 6.96354Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_300_153">
            <Rect width="30" height="30" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default VideoCallSVG;
