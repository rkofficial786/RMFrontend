import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { styles } from './styles';

interface TextStyleProps {
  children: ReactNode;
  customStyle?: StyleProp<TextStyle>;
  color?: string;
}

const TextCustom: React.FC<TextStyleProps> = ({ children, customStyle, color, ...props }) => {
  return (
    <Text style={[styles?.defaultText, { color }, customStyle]} {...props}>
      {children}
    </Text>
  );
};

export default TextCustom;
