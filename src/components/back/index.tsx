import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { COLORS, LightCOLORS } from '../../constants/colors';

const Back = ({ onPress }: any) => {
  const { darkMode } = useSelector((state: any) => state.other);

  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.container]}
      underlayColor={COLORS.lightBlack}
    >
      <Icon name="keyboard-backspace" size={26} color={darkMode ? COLORS.white : LightCOLORS.blackyish} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: '4%',
    top: '2%',
    borderRadius: 200, // Set the border radius to create a rounded background
    padding: 6, // Adjust padding as needed
  },
});

export default Back;
