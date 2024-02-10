import React from 'react';
import { Svg, Rect, Path } from 'react-native-svg';

const SuccessSVG = ({ width, height, color = 'green' }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
    >
      <Rect width="26" height="26" rx="13" fill={color} />
      <Path
        d="M19.7986 8.20492C19.6711 8.07367 19.4986 8 19.3187 8C19.1389 8 18.9664 8.07367 18.8388 8.20492L11.2827 15.9917L7.19838 11.7636C7.07381 11.6243 6.90091 11.542 6.71771 11.5348C6.53452 11.5275 6.35604 11.5958 6.22154 11.7248C6.08704 11.8538 6.00753 12.0327 6.00051 12.2224C5.99349 12.412 6.05953 12.5968 6.1841 12.736L11.2827 18L19.7986 9.20557C19.8624 9.14006 19.9131 9.06212 19.9476 8.97625C19.9822 8.89037 20 8.79827 20 8.70524C20 8.61221 19.9822 8.52011 19.9476 8.43424C19.9131 8.34836 19.8624 8.27043 19.7986 8.20492Z"
        fill="white"
      />
    </Svg>
  );
};

export default SuccessSVG;
