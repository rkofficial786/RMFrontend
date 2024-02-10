import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SecuritySVG = ({ width, height, color }) => {
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
          d="M15 14.3396C13.7143 14.3396 12.8571 15.0943 12.8571 16.2264C12.8571 16.9811 13.5 17.5472 14.1429 17.7358L13.5 20.3774H16.2857L15.6429 17.7358C16.5 17.5472 16.9286 16.9811 16.9286 16.2264C17.1429 15.0943 16.2857 14.3396 15 14.3396ZM15.2143 6.22642C13.7143 6.22642 12.2143 7.16981 12.2143 8.49057V11.3208H18V8.49057C17.7857 7.16981 16.7143 6.22642 15.2143 6.22642ZM15 0L0 5.66038V11.3208C0.214286 19.6226 6.21429 26.9811 15 30C23.7857 26.9811 29.7857 19.6226 30 11.3208V5.66038L15 0ZM23.5714 20.7547C23.5714 21.8868 22.7143 22.6415 21.4286 22.6415H8.57143C7.28571 22.6415 6.42857 21.8868 6.42857 20.7547V13.2075C6.42857 12.0755 7.28571 11.3208 8.57143 11.3208H9.21429V8.49057C9.42857 5.84906 12 3.77358 15 3.77358C18 3.77358 20.5714 5.84906 20.7857 8.49057V11.3208H21.4286C22.7143 11.3208 23.5714 12.0755 23.5714 13.2075V20.7547Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default SecuritySVG;