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
    height: '15%',
  },

  bottomContainer: {
    borderTopLeftRadius: sizer.horizontalScale(40),
    borderTopRightRadius: sizer.horizontalScale(40),
    backgroundColor: LightCOLORS.white,
    height: '85%',
  },

  inputContainer: {
    marginTop: sizer.horizontalScale(60),
    gap: sizer.horizontalScale(36),
    paddingHorizontal: sizer.horizontalScale(24),
  },

  checkBoxContainer: {
    flexDirection: 'row',
    gap: sizer.horizontalScale(12),
    flexWrap: 'wrap',
    marginTop: sizer.horizontalScale(16),
  },

  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  timePickerButton: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTime: {
    backgroundColor: COLORS.primary,
  },
  timePickerButtonText: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeRangeSeparator: {
    marginHorizontal: 10,
    color: COLORS.textSecondary,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
