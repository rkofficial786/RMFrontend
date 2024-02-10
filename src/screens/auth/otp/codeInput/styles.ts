import {StyleSheet} from 'react-native';
import sizer from '../../../../helpers/sizer';
import {LightCOLORS} from '../../../../constants/colors';

export const styles = StyleSheet.create({
  codeInputSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: sizer.horizontalScale(30),
  },

  codeInputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  codeInput: {
   
    minWidth: sizer.horizontalScale(40),
    height: sizer.horizontalScale(40),
    borderWidth: sizer.horizontalScale(2),
    borderRadius: sizer.horizontalScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeInputText: {
    fontSize: sizer.horizontalScale(22),
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },

  codeInputFocused: {
    
    minWidth: sizer.horizontalScale(40),
    height: sizer.horizontalScale(40),
    borderWidth: sizer.horizontalScale(2),
    borderRadius: sizer.horizontalScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  hiddenTextInput: {
    position: 'absolute',
    width: sizer.horizontalScale(100),
    paddingHorizontal:sizer.horizontalScale(200)
    
    // height: 1,
    // opacity: 0,
  },
});
