import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Emoji = ({ color, width, height }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
        <Path
          d="M15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30ZM4.33125 9.83063C4.26199 9.55416 4.25667 9.26554 4.3157 8.98671C4.37472 8.70787 4.49653 8.44617 4.67187 8.22147C4.84722 7.99678 5.07147 7.81502 5.3276 7.69001C5.58373 7.56499 5.86499 7.50001 6.15 7.5H11.25C11.7473 7.5 12.2242 7.69754 12.5758 8.04918C12.9275 8.40081 13.125 8.87772 13.125 9.375V9.5925C13.7391 9.44544 14.3686 9.37242 15 9.375C15.6562 9.375 16.2938 9.45 16.875 9.5925V9.375C16.875 8.87772 17.0725 8.40081 17.4242 8.04918C17.7758 7.69754 18.2527 7.5 18.75 7.5H23.85C24.135 7.50001 24.4163 7.56499 24.6724 7.69001C24.9285 7.81502 25.1528 7.99678 25.3281 8.22147C25.5035 8.44617 25.6253 8.70787 25.6843 8.98671C25.7433 9.26554 25.738 9.55416 25.6687 9.83063L25.0856 12.1594C24.8828 12.9706 24.4147 13.6909 23.7556 14.2056C23.0966 14.7202 22.2844 14.9999 21.4481 15H20.625C19.6825 15.0002 18.7745 14.6456 18.0817 14.0066C17.3889 13.3677 16.9621 12.4913 16.8862 11.5519C16.2794 11.3441 15.6414 11.242 15 11.25C14.2631 11.25 13.6125 11.37 13.1137 11.5519C13.0379 12.4913 12.6111 13.3677 11.9183 14.0066C11.2255 14.6456 10.3175 15.0002 9.375 15H8.55375C7.71752 14.9999 6.90532 14.7202 6.24624 14.2056C5.58717 13.6909 5.11904 12.9706 4.91625 12.1594L4.33125 9.83063ZM9.31687 18.2812C9.89255 19.2791 10.7209 20.1077 11.7186 20.6838C12.7162 21.2598 13.848 21.5629 15 21.5625C16.1523 21.5632 17.2845 21.2603 18.2825 20.6842C19.2805 20.1082 20.1092 19.2794 20.685 18.2812C20.7461 18.1738 20.8279 18.0794 20.9256 18.0037C21.0233 17.9279 21.135 17.8723 21.2544 17.8399C21.3737 17.8075 21.4982 17.799 21.6208 17.8149C21.7434 17.8309 21.8617 17.8709 21.9687 17.9327C22.0758 17.9945 22.1696 18.0769 22.2447 18.1751C22.3198 18.2734 22.3747 18.3855 22.4063 18.505C22.4379 18.6245 22.4456 18.7491 22.4288 18.8716C22.4121 18.9941 22.3713 19.1121 22.3088 19.2188C21.5684 20.5019 20.503 21.5674 19.22 22.308C17.9369 23.0486 16.4814 23.4382 15 23.4375C13.5186 23.4382 12.0631 23.0486 10.78 22.308C9.49697 21.5674 8.43165 20.5019 7.69125 19.2188C7.56889 19.0035 7.53662 18.7487 7.60149 18.5098C7.66635 18.2708 7.82308 18.0673 8.03747 17.9435C8.25187 17.8197 8.50652 17.7857 8.74586 17.849C8.9852 17.9123 9.19167 18.0677 9.31687 18.2812Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default Emoji;