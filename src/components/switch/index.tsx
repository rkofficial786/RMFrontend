import React from 'react';
import { View, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/color';
import { styles } from './styles'; // Make sure to import your styles if needed
import sizer from '../../helpers/sizer';

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onValueChange }) => {
  const toggleSwitch = () => {
    onValueChange(!value);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={toggleSwitch}>
      <View
        style={[
          styles.switch_container,
          { backgroundColor: value ? COLORS.theme_text_color : COLORS.light_gray_color }
        ]}
      >
        <View
          style={[styles.switch_circle, { marginLeft: value ? '50%' : sizer.horizontalScale(2) }]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CustomSwitch;
