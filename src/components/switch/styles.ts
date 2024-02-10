import { StyleSheet } from 'react-native';
import sizer from '../../helpers/sizer';
import { COLORS } from '../../constants/color';

export const styles = StyleSheet.create({
  switch_container: {
    width: sizer.horizontalScale(50),
    height: sizer.horizontalScale(26),
    borderRadius: sizer.horizontalScale(15),
    flexDirection: 'row',
    alignItems: 'center'
  },
  switch_circle: {
    width: sizer.horizontalScale(23),
    height: sizer.horizontalScale(23),
    borderRadius: sizer.horizontalScale(12),
    backgroundColor: COLORS.white
  }
});
