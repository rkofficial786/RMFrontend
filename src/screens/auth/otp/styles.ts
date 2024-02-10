import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import sizer from '../../../helpers/sizer';

export const styles = StyleSheet.create({
  top_container: {
    height: sizer.horizontalScale(240),
    width: sizer.horizontalScale(240),
    borderRadius: sizer.horizontalScale(99999),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sizer.horizontalScale(50),
  },
  otp_text: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizer.horizontalScale(60),
  },
  container: {
    marginHorizontal: sizer.horizontalScale(30),
  },

  btn_container: {
    marginTop: sizer.horizontalScale(50),
    marginHorizontal: sizer.horizontalScale(20),
  },

  resend:{
    marginTop:sizer.horizontalScale(40) ,
    alignSelf:"center" ,
    marginHorizontal: sizer.horizontalScale(20),
  }
});
