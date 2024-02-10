import React, { FC } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import { COLORS, LightCOLORS } from '../../constants/colors';
import sizer from '../../helpers/sizer';
import CancelSVG from '../../assets/svg/cancelSVG';
import { styles } from './styles'; // Assuming you have a separate styles file
import TextCustom from '../textStyle';
import { textStyle } from '../textStyle/textStyle';
import { useSelector } from 'react-redux';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  heading: string;
  children: React.ReactNode;
}

const CustomModal: FC<CustomModalProps> = ({
  visible,
  onClose,
  heading,
  children,
}) => {

  const { darkMode } = useSelector((state) => state.other)
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible || false}
      onRequestClose={() => {
        onClose();
      }}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.modal_container, { backgroundColor: darkMode ? COLORS.primaryReduced : LightCOLORS.whiteReduced }]}>
          <SafeAreaView style={styles.safe_area}>
            <TouchableWithoutFeedback>
              <View style={[styles.modal_content, { backgroundColor: darkMode ? COLORS.primary : LightCOLORS.shade3 }]}>
                <View style={[styles.header, { backgroundColor: LightCOLORS.primary }]}>
                  <TextCustom
                    customStyle={[styles.heading, textStyle.fs_600_20, { color: darkMode ? COLORS.textPrimary : LightCOLORS.white }]}>
                    {heading}
                  </TextCustom>
                  <TouchableOpacity
                    onPress={onClose}
                    style={styles.close_button}>
                    <CancelSVG
                      width={sizer.horizontalScale(20)}
                      height={sizer.horizontalScale(20)}
                      color={COLORS.primary}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.line}></View>

                <View style={styles.children_container}>{children}</View>
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;
