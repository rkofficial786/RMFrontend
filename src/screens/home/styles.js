import {StyleSheet} from 'react-native';
import {COLORS, LightCOLORS} from '../../constants/colors';
import sizer from '../../helpers/sizer';

export const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 2,
    flex: 1,
    backgroundColor: LightCOLORS.primary,
  },

  topContainer: {
    height: '20%',
  },

  bottomContainer: {
    borderTopLeftRadius: sizer.horizontalScale(40),
    borderTopRightRadius: sizer.horizontalScale(40),
    backgroundColor: LightCOLORS.white,
    height: '80%',
  },

  firstTime:{
    backgroundColor:LightCOLORS.primaryReduced ,
    height:"100%" ,

  } ,
  centerContainer:{
    alignItems:"center",
    justifyContent:"center" ,
    flex:1
  }
});
