import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const HelpSVG = ({ width, height, color }) => {
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
          d="M15 0C6.71562 0 0 6.71562 0 15C0 23.2844 6.71562 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71562 23.2844 0 15 0ZM15 3.75C21.2131 3.75 26.25 8.78687 26.25 15C26.25 21.2131 21.2131 26.25 15 26.25C8.78687 26.25 3.75 21.2131 3.75 15C3.75 8.78687 8.78687 3.75 15 3.75ZM15 5.625C10.8579 5.625 7.5 8.14338 7.5 11.25C7.5 13.125 11.25 13.125 11.25 11.25C11.25 10.2144 12.9289 9.375 15 9.375C17.0711 9.375 18.75 10.2144 18.75 11.25C18.75 12.2856 16.875 12.1875 15 13.125C14.8928 13.1786 14.7941 13.2477 14.707 13.33C13.1581 14.3116 13.125 15.9954 13.125 16.875V17.8125C13.125 18.8512 13.9613 19.6875 15 19.6875C16.0387 19.6875 16.875 18.8512 16.875 17.8125V16.875C16.875 14.0625 22.5 14.3566 22.5 11.25C22.5 8.14338 19.1421 5.625 15 5.625ZM15 20.625C14.5027 20.625 14.0258 20.8225 13.6742 21.1742C13.3225 21.5258 13.125 22.0027 13.125 22.5C13.125 22.9973 13.3225 23.4742 13.6742 23.8258C14.0258 24.1775 14.5027 24.375 15 24.375C15.4973 24.375 15.9742 24.1775 16.3258 23.8258C16.6775 23.4742 16.875 22.9973 16.875 22.5C16.875 22.0027 16.6775 21.5258 16.3258 21.1742C15.9742 20.8225 15.4973 20.625 15 20.625Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default HelpSVG;
