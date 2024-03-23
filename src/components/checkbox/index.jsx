import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import TextCustom from '../textStyle';
import {COLORS, LightCOLORS} from '../../constants/colors';
import sizer from '../../helpers/sizer';
// Assuming you have a custom Text component

const CheckBox = ({label, isChecked, onPress}) => {
  const [checked, setChecked] = useState(isChecked || false);

  const handlePress = () => {
    setChecked(!checked);
    if (onPress) {
      onPress(!checked);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={[styles.checkbox]}>
        {checked && <View style={styles.checked}></View>}
      </View>

      <TextCustom
        color={checked ? LightCOLORS.blackyish : COLORS.lightBlack}
        customStyle={styles.label}>
        {label}
      </TextCustom>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: sizer.horizontalScale(24),
    height: sizer.horizontalScale(24),
    borderRadius: 999,
    borderWidth: sizer.horizontalScale(2),
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: LightCOLORS.primary, // Change this color according to your design

    width: sizer.horizontalScale(16),
    height: sizer.horizontalScale(16),
    borderRadius: 9999,
  },
  label: {
    marginLeft: sizer.horizontalScale(6),
  },
});

export default CheckBox;
