import { StyleSheet } from 'react-native';
import { OPENSANS } from '../../constants/fonts';
import sizer from '../../helpers/sizer';

export const styles = StyleSheet.create({
  defaultText: {
    fontFamily: OPENSANS.semiBold,
    fontSize: sizer.fontScale(16),
    fontWeight: '600',
    lineHeight: sizer.lineHeight(16)
  }
});
