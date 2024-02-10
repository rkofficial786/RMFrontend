import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import sizer from '../../helpers/sizer';
import {OPENSANS} from '../../constants/fonts';

export const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    paddingHorizontal:30
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.textSecondary,
  },
  safe_area: {
    flex: 1,
    justifyContent: 'center',
  },
  modal_content: {
    
    // borderRadius: sizer.horizontalScale(12),

    borderBottomLeftRadius: sizer.horizontalScale(12),
    borderBottomRightRadius: sizer.horizontalScale(12),
    borderTopRightRadius:sizer.horizontalScale(12),
    borderTopLeftRadius:sizer.horizontalScale(12),
    minWidth: sizer.horizontalScale(378),
    elevation:3
  },

  header: {
    borderTopLeftRadius: sizer.horizontalScale(12),
    borderTopRightRadius: sizer.horizontalScale(12),
    flexDirection: 'row',
    elevation:3,
    height: sizer.horizontalScale(44),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
   
    textAlign: 'center',

    flex: 1,
  },
  close_button: {
    padding: 8,
  },

  children_container: {
    padding: sizer.horizontalScale(10),
  },
});
