// LinearGradientBackground.js
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = ({colors, children}:any) => {
  return (
    <LinearGradient
      colors={colors}
      useAngle={true} // Set useAngle to true
      angle={30} // Experiment with different angles
      style={{flex: 1}}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
