import {StyleSheet} from 'react-native';
import sizer from '../../helpers/sizer';
import {OPENSANS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  Container: {
    //sp-comment small text case
    flexDirection: 'column',
    gap: sizer.horizontalScale(4),
  },

  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: sizer.horizontalScale(52),

    borderRadius: sizer.horizontalScale(4),
    paddingHorizontal: sizer.horizontalScale(12),
    gap:sizer.horizontalScale(6)
  },

  input: {
    flex: 1,
    height: '100%',
    // paddingHorizontal: sizer.horizontalScale(12),
    fontFamily: OPENSANS.semiBold,
    //  borderWidth:2,
    fontSize: sizer.fontScale(18),
    lineHeight: sizer.lineHeight(18),
    fontStyle: 'normal',
    
    fontWeight: '600',
    alignItems: 'center',
    padding: 0,
    justifyContent: 'center',
   
  },

  icon_container: {
    paddingHorizontal: 2,
    minWidth:sizer.horizontalScale(30)
  },

  error_text: {
    color: 'red',
    marginTop: sizer.horizontalScale(-4),
   

  },
});
