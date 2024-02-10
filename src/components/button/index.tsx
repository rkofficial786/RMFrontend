import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  StyleProp,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import { COLORS, LightCOLORS } from '../../constants/colors';
import { styles } from './styles';

import sizer from '../../helpers/sizer';
import { useSelector } from 'react-redux';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  smallWidth?: boolean;
  loading?: boolean; // Added a comma here
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onPress,
  loading,
  smallWidth,
  ...props
}) => {


  const { darkMode } = useSelector((state: any) => state.other)
  return (
    <TouchableOpacity
      style={
        disabled
          ? smallWidth
            ? [styles.small_width_button, styles.disabled_btn]
            : [styles.button, styles.disabled_btn, { backgroundColor: darkMode ? COLORS.buttonSecondary : LightCOLORS.primaryReduced }]
          : smallWidth
            ? [styles.small_width_button , { backgroundColor: darkMode ? COLORS.secondary : LightCOLORS.primary }]
            : [styles.button, { backgroundColor: darkMode ? COLORS.secondary : LightCOLORS.primary }]
      }
      // underlayColor={COLORS.buttonPrimary}
      activeOpacity={0.4}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      <Text style={disabled ? [styles.disabled_btn_text , { color: darkMode ? COLORS.textSecondary : LightCOLORS.blackyish }]: [styles.button_text, { color: darkMode ? COLORS.border : LightCOLORS.white }]}>
        {loading ? (
          <ActivityIndicator size={sizer.horizontalScale(25)} color={'white'} />
        ) : (
          children
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
