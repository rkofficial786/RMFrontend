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
import {COLORS} from '../../constants/colors';
import {styles} from './styles';

import sizer from '../../helpers/sizer';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  smallWidth?: boolean;
  loading?: boolean; // Added a comma here
}

const Button2: React.FC<ButtonProps> = ({
  children,
  disabled,
  onPress,
  loading,
  smallWidth,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={
        disabled
          ? smallWidth
            ? [styles.small_width_button, styles.disabled_btn]
            : [styles.button, styles.disabled_btn]
          : smallWidth
          ? styles.small_width_button
          : styles.button
      }
      // underlayColor={COLORS.buttonPrimary}
      activeOpacity={0.4}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      <Text style={disabled ? styles.disabled_btn_text : styles.button_text}>
        {loading ? (
          <ActivityIndicator size={sizer.horizontalScale(25)} color={'white'} />
        ) : (
          children
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default Button2;
