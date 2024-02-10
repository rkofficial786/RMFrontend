import React, { useState, ReactNode } from 'react';
import { View, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { COLORS, LightCOLORS } from '../../constants/colors';
import TextCustom from '../textStyle';
import { styles } from './styles';
import sizer from '../../helpers/sizer';
import { textStyle } from '../textStyle/textStyle';
import { useSelector } from 'react-redux';

interface InputProps {
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  customStyles?: any;
}

const Input: React.FC<InputProps & React.ComponentProps<typeof TextInput>> = ({
  error,
  leftIcon,
  rightIcon,
  label,
  customStyles,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { darkMode } = useSelector((state:any) => state.other)

  const borderColor = error
    ? COLORS.error
    : isFocused
      ? darkMode ? COLORS.shade3 : LightCOLORS.blackyish
      : darkMode ? COLORS.border : "transparent";

  const borderWidth = isFocused
    ? sizer.horizontalScale(1)
    : sizer.horizontalScale(1);



  return (
    <View style={[styles.Container]}>
      {label && <TextCustom color={darkMode ? COLORS.textSecondary : LightCOLORS.blackyish}>{label}</TextCustom>}

      <View
        style={[
          styles.input_container,
          customStyles,
          { borderColor, borderWidth },
          { backgroundColor: darkMode ? "" : LightCOLORS.backgroundPrimary }
        ]}>
        {leftIcon && <View style={styles.icon_container}>{leftIcon}</View>}

        <TextInput
          style={[styles.input, leftIcon ? { paddingLeft: 6 } : { paddingLeft: 0 }]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
          placeholderTextColor={COLORS.textSecondary}
        />
        {rightIcon && <View style={styles.icon_container}>{rightIcon}</View>}
      </View>
      {error && (
        <TextCustom
          color={COLORS.error}
          customStyle={[styles.error_text, textStyle.fs_600_14]}>
          {error}
        </TextCustom>
      )}
    </View>
  );
};

export default Input;
