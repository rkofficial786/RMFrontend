import React, { Fragment, ReactNode } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from '../../constants/color';

interface SafeStatusBarProps {
  children: ReactNode;
}

const SafeStatusBar = ({ children }: SafeStatusBarProps) => {
  return (
    <Fragment>
      {/* IOS Status Bar Color */}
      <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.white }} />
      {/* IOS Bottom Notch Area Color */}
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <StatusBar
          backgroundColor={COLORS.white} // Android Status Bar Color
          barStyle="dark-content" // Status Bar Text color on both Android & IOS
        />
        <View
          style={{
            flex: 1
          }}
        >
          {children}
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default SafeStatusBar;
