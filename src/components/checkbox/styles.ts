import { StyleSheet } from 'react-native';
import sizer from '../../helpers/sizer';
import { COLORS } from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    width: sizer.horizontalScale(20),
    height: sizer.horizontalScale(20),
    borderWidth: sizer.horizontalScale(1),
    borderColor: COLORS.dark_gray_text_color,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  label: {
    color: COLORS.secondary_text_color,
    
  }
});
