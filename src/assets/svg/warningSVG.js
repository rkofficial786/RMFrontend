import React from 'react';
import { Svg, Rect, Path } from 'react-native-svg';

const WarningSVG = ({ width, height, color = 'yellow' }) => {
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
        d="M12.1429 16.2041C12.1429 16.4206 12.2332 16.6282 12.3939 16.7813C12.5547 16.9344 12.7727 17.0204 13 17.0204C13.2273 17.0204 13.4453 16.9344 13.6061 16.7813C13.7668 16.6282 13.8571 16.4206 13.8571 16.2041C13.8571 15.9876 13.7668 15.7799 13.6061 15.6269C13.4453 15.4738 13.2273 15.3878 13 15.3878C12.7727 15.3878 12.5547 15.4738 12.3939 15.6269C12.2332 15.7799 12.1429 15.9876 12.1429 16.2041ZM12.4286 11.034V14.1633C12.4286 14.2381 12.4929 14.2993 12.5715 14.2993H13.4285C13.5071 14.2993 13.5714 14.2381 13.5714 14.1633V11.034C13.5714 10.9592 13.5071 10.898 13.4285 10.898H12.5715C12.4929 10.898 12.4286 10.9592 12.4286 11.034ZM20.9228 18.517L13.4946 6.27211C13.3839 6.09014 13.1928 6 13 6C12.8072 6 12.6143 6.09014 12.5054 6.27211L5.07723 18.517C4.8576 18.881 5.13259 19.3333 5.57185 19.3333H20.4282C20.8674 19.3333 21.1424 18.881 20.9228 18.517ZM6.93249 18.0425L13 8.03912L19.0675 18.0425H6.93249Z"
        fill="white"
      />
    </Svg>
  );
};

export default WarningSVG;
