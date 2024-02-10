import { COLORS } from '../../constants/color';
import sizer from '../../helpers/sizer';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    gap: sizer.horizontalScale(12),
    paddingRight: sizer.horizontalScale(12)
  },
  select_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizer.horizontalScale(12),
    // paddingVertical: sizer.horizontalScale(12),
    height: sizer.horizontalScale(42),
    borderWidth: sizer.horizontalScale(1),
    borderRadius: sizer.horizontalScale(5),
    borderColor: 'gray',
    backgroundColor: 'transparent',
    gap: sizer.horizontalScale(10)
  },
  label: {
    color: COLORS.primary_text_color
  },
  dropdown_container: {
    width: '100%',
    position: 'absolute',
    backgroundColor: COLORS.white,
    borderRadius: sizer.horizontalScale(5),
    top: sizer.horizontalScale(46),
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 12,
    elevation: 8,
    zIndex: 1000
  },
  option_item: {
    padding: sizer.horizontalScale(8),
    paddingHorizontal: sizer.horizontalScale(12),
    height: sizer.horizontalScale(34),

    justifyContent: 'center'
  },
  circular_border: {
    padding: sizer.horizontalScale(4),
    paddingHorizontal: sizer.horizontalScale(10),
    height: sizer.horizontalScale(34),

    justifyContent: 'center',

    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  selected_option: {
    backgroundColor: COLORS.light_gray_color
  }
});
