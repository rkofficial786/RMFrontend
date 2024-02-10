import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBoxSVG from '../../assets/svg/checkBox';
import { COLORS } from '../../constants/color';
import TextCustom from '../textStyle';
import sizer from '../../helpers/sizer';
import { styles } from './styles';
import { textStyle } from '../textStyle/textStyle';
interface CheckBoxProps {
  checked?: boolean;
  onChange?: (newState: boolean) => void;
  label?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked = false, onChange, label }) => {
  const handleToggle = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleToggle}>
      <View style={styles.checkbox}>
        {checked && (
          <CheckBoxSVG
            width={sizer.horizontalScale(20)}
            height={sizer.horizontalScale(20)}
            color={COLORS.theme_text_color}
          />
        )}
      </View>
      {label && <TextCustom customStyle={[styles.label,textStyle.fs_600_14]}>{label}</TextCustom>}
    </TouchableOpacity>
  );
};

export default CheckBox;
