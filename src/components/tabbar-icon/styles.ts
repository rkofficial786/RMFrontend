import { StyleSheet } from 'react-native';
import sizer from '../../helpers/sizer';

export const styles = StyleSheet.create({
  dot: {
    width: sizer.horizontalScale(7),
    borderRadius: 100,
    height: sizer.horizontalScale(7),
    position: 'absolute',
    backgroundColor: 'red',
    right: 0,
    zIndex: 100,
    top: -2
  }
});
