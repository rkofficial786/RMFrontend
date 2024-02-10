import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, G, animateTransform } from 'react-native-svg';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={styles.loader}
        width="240px"
        height="240px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <Circle
          cx="50"
          cy="50"
          fill="none"
          stroke="green"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </Circle>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loader: {
    margin: 'auto',
    backgroundColor: 'none',
    display: 'block',
    shapeRendering: 'auto'
  }
});

export default Loader;
