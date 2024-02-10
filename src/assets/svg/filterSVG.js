import React from 'react';
import { Svg, Path, Defs, ClipPath, Rect, G } from 'react-native-svg';

const FilterSVG = ({ height, width, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G clip-path="url(#clip0_805_85)">
        <Path
          d="M22.8739 0H1.12631C0.127026 0 -0.377208 1.21247 0.330839 1.92052L9 10.591V20.25C9 20.6171 9.1791 20.9611 9.47985 21.1717L13.2299 23.7957C13.9697 24.3136 15 23.7887 15 22.8741V10.591L23.6694 1.92052C24.376 1.21388 23.8752 0 22.8739 0Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_805_85">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default FilterSVG;
