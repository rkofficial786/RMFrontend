import React, { useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
  TouchableWithoutFeedback
} from 'react-native';

import sizer from '../../helpers/sizer';
import { COLORS } from '../../constants/color';
import DownArrowSVG from '../../assets/svg/downArrowSVG';
import TextCustom from '../textStyle';
import { styles } from './styles';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options?: Option[];
  selectedValue?: Option | null;
  onSelect?: (item: Option) => void;
  width?: any;
}

const Select: React.FC<SelectProps> = ({
  label = 'Select',
  options = [],
  selectedValue,
  width = '100%',
  onSelect
}) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const handleSelect = (item: Option) => {
    setDropDownVisible(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  const handlePressOutside = () => {
    setDropDownVisible(false);
  };

  const dropDownRef = useRef(null);

  return (
    <View style={[styles.container, { width: width }]}>
      <Pressable
        ref={dropDownRef}
        style={styles.select_container}
        onPress={() => setDropDownVisible(!dropDownVisible)}
      >
        <TextCustom customStyle={styles.label}>
          {selectedValue ? selectedValue.label : label}
        </TextCustom>
        <DownArrowSVG
          width={sizer.horizontalScale(20)}
          height={sizer.horizontalScale(20)}
          color={COLORS.theme_text_color}
        />
      </Pressable>

      {dropDownVisible && (
        <TouchableWithoutFeedback onPress={handlePressOutside}>
          <View style={styles.dropdown_container}>
            <FlatList
              data={options}
              keyExtractor={(item) => item?.value.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[
                    index === options.length - 1 ? styles.circular_border : styles.option_item,
                    selectedValue && selectedValue.value === item.value
                      ? styles.selected_option
                      : null
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <TextCustom color={COLORS.primary_text_color}>{item?.label}</TextCustom>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default Select;
