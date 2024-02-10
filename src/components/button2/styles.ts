import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import sizer from '../../helpers/sizer';
import {OPENSANS} from '../../constants/fonts';
export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.shade1,
    paddingVertical: 12,
    height: sizer.horizontalScale(46),
    borderRadius: sizer.horizontalScale(5),
    alignItems: 'center',
    minWidth: '100%',
    justifyContent: 'center',
  },

  button_text: {
    color: COLORS.textPrimary,
    fontSize: sizer.fontScale(16),
    lineHeight: sizer.lineHeight(16),
    fontWeight: '700',
    fontFamily: OPENSANS.semiBold,
  },

  small_width_button: {
    backgroundColor: COLORS.shade1,
    paddingVertical: 12,
    height: sizer.horizontalScale(46),
    borderRadius: sizer.horizontalScale(5),
    alignItems: 'center',
    minWidth: sizer.horizontalScale(124),
    width: sizer.horizontalScale(124),
    justifyContent: 'center',
  },

  disabled_btn: {
    backgroundColor: COLORS.textSecondary,
    opacity:0.5
  },

  disabled_btn_text: {
    color: COLORS.textPrimary,
    fontSize: sizer.fontScale(16),
    lineHeight: sizer.lineHeight(16),
    fontWeight: '700',
    fontFamily: OPENSANS.semiBold,
  },
});
