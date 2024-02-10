import {StyleSheet} from 'react-native';
import sizer from '../../../helpers/sizer';
import {useSelector} from 'react-redux';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"white"

    // justifyContent: 'center',
    paddingTop: sizer.horizontalScale(40),
    alignItems: 'center',
  },
  logo: {
    width: '80%', // Adjust the width as needed
    height: '30%', // Adjust the height as needed
    resizeMode: 'cover',
  },
  main_container: {
    marginHorizontal: sizer.horizontalScale(26),
    gap: sizer.horizontalScale(25),
    marginTop: sizer.horizontalScale(30),
  },

  login_text: {
    borderBottomWidth: 1,
  },
  divider: {
    borderBottomWidth: 1,
    marginVertical: sizer.horizontalScale(10),
  },

  googleButtonContainer: {
    marginTop: sizer.horizontalScale(4),
    //  alignItems:"center",
    //  width:"auto",
    //  padding:10

    //  justifyContent:"center"
  },

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: sizer.horizontalScale(8),
    paddingVertical: sizer.horizontalScale(12),
  },
  googleIcon: {
    marginRight: sizer.horizontalScale(10),
  },
  googleButtonText: {
    fontWeight: 'bold',
    fontSize: sizer.fontScale(16),
  },
});
