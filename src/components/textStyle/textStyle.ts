import { StyleSheet } from 'react-native';
import sizer from '../../helpers/sizer';
import { OPENSANS } from '../../constants/fonts';

export const textStyle = StyleSheet.create({
  fs_600_10: {
    fontSize: sizer.fontScale(10),
    fontStyle: 'normal',
    fontFamily: OPENSANS.semiBold,
    lineHeight: sizer.lineHeight(11)
  },
  fs_600_12: {
    fontSize: sizer.fontScale(12),
    fontStyle: 'normal',
    fontFamily: OPENSANS.semiBold,
    fontWeight: '600',
    lineHeight: sizer.lineHeight(12)
  },
  fs_700_12: {
    fontSize: sizer.fontScale(12),
    fontStyle: 'normal',
    fontFamily: OPENSANS.bold,
    fontWeight: '700',
    lineHeight: sizer.lineHeight(12)
  },
  fs_600_14: {
    fontSize: sizer.fontScale(14),
    fontStyle: 'normal',
    fontFamily: OPENSANS.semiBold,
    fontWeight: '600',
    lineHeight: sizer.lineHeight(16)
  },
  fs_700_14: {
    fontSize: sizer.fontScale(14),
    fontStyle: 'normal',
    fontFamily: OPENSANS.bold,
    fontWeight: '700',
    lineHeight: sizer.lineHeight(14)
  },
  fs_600_16: {
    fontSize: sizer.fontScale(16),
    fontStyle: 'normal',
    fontFamily: OPENSANS.semiBold,
    fontWeight: '600',
    lineHeight: sizer.lineHeight(16)
  },
  fs_700_16: {
    fontSize: sizer.fontScale(16),
    fontStyle: 'normal',
    fontFamily: OPENSANS.bold,
    fontWeight: '700',
    lineHeight: sizer.lineHeight(16)
  },
  fs_600_18: {
    fontSize: sizer.fontScale(18),
    fontStyle: 'normal',
    fontFamily: OPENSANS.semiBold,
    fontWeight: '600',
    lineHeight: sizer.lineHeight(18)
  },

  fs_400_18: {
    fontSize: sizer.fontScale(18),
    fontStyle: 'normal',
    fontFamily: OPENSANS.regular,
    fontWeight: '400',
    lineHeight: sizer.lineHeight(18)
  },

  fs_600_20: {
    fontSize: sizer.fontScale(20),
    fontStyle: 'normal',
    fontFamily: OPENSANS.semiBold,
    fontWeight: '600',
    lineHeight: sizer.lineHeight(20)
  },
  fs_600_22: {
    fontSize: sizer.fontScale(22),
    fontStyle: 'normal',
    fontFamily: OPENSANS.semiBold,
    fontWeight: '600',
    lineHeight: sizer.lineHeight(19)
  },

  fs_700_22: {
    fontSize: sizer.fontScale(22),
    fontStyle: 'normal',
    fontFamily: OPENSANS.bold,
    fontWeight: '700',
    lineHeight: sizer.lineHeight(22)
  },


  fs_700_32: {
    fontSize: sizer.fontScale(32),
    fontStyle: 'normal',
    fontFamily: OPENSANS.bold,
    fontWeight: '700',
    lineHeight: sizer.lineHeight(32)
  },

  fs_600_24: {
    fontSize: sizer.fontScale(24),
    fontStyle: 'normal',
    fontFamily: OPENSANS.semiBold,
    fontWeight: '600',
    lineHeight: sizer.lineHeight(24)
  }

  //   fs_400_26_norican: {
  //     fontSize: sizer.fontScale(26),
  //     fontStyle: 'normal',
  //     fontFamily: NORICAN.regular,
  //     fontWeight: '400',
  //     lineHeight: sizer.lineHeight(32)
  //   },

  //   fs_400_32_norican: {
  //     fontSize: sizer.fontScale(32),
  //     fontStyle: 'normal',
  //     fontFamily: NORICAN.regular,
  //     fontWeight: '400',
  //     lineHeight: sizer.lineHeight(40)
  //   },

  //   fs_400_48_norican: {
  //     fontSize: sizer.fontScale(48),
  //     fontStyle: 'normal',
  //     fontFamily: NORICAN.regular,
  //     fontWeight: '400',
  //     lineHeight: sizer.lineHeight(60)
  //   },
});
