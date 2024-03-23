import {
  View,
  Text,
  TouchableOpacity,
  DatePickerAndroid,
  TimePickerAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import Input from '../../components/input';
import {COLORS, LightCOLORS} from '../../constants/colors';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import TextCustom from '../../components/textStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import CheckBox from '../../components/checkbox';
import {days} from './data';

const CreateTask = () => {
  const {darkMode} = useSelector(state => state.other);

  const [repeatDays, setRepeatDays] = useState([]);

  const handleCheckBoxChange = (label, isChecked) => {
    if (isChecked) {
      setRepeatDays(prevRepeatDays => [...prevRepeatDays, label.slice(0, 3)]);
    } else {
      setRepeatDays(prevRepeatDays =>
        prevRepeatDays.filter(day => day.slice(0, 3) !== label.slice(0, 3)),
      );
    }
  };

  console.log(repeatDays, 'repret');

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const onChangeStartTime = (event, selectedDate) => {
    setStartTime(selectedDate);
  };

  const onChangeEndTime = (event, selectedDate) => {
    setEndTime(selectedDate);
  };

  console.log(startTime, 'start');
  console.log(endTime, 'end');

  const showMode = (currentMode, type) => {
    DateTimePickerAndroid.open({
      value: type == 'start' ? startTime : endTime,
      onChange: type == 'start' ? onChangeStartTime : onChangeEndTime,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showTimepicker = type => {
    showMode('time', type);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: darkMode ? COLORS.containerColor : LightCOLORS.white,
      }}>
      <View style={styles.mainContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}></View>
          <View style={styles.bottomContainer}>
            <View style={styles.inputContainer}>
              <Input
                leftIcon={
                  <Icon
                    name="drive-file-rename-outline"
                    size={24}
                    color={darkMode ? COLORS.white : LightCOLORS.primary}
                  />
                }
                placeholder="Enter Task Name"
                label="What to name your  task?"
              />
              <Input
                leftIcon={
                  <Icon2
                    name="tasks"
                    size={24}
                    color={darkMode ? COLORS.white : LightCOLORS.primary}
                  />
                }
                placeholder="Enter Description"
                multiline={true}
                numberOfLines={4}
                label="Describe the task"
              />

              <View>
                <TextCustom color={LightCOLORS.blackyish}>
                  Repeat Days?
                </TextCustom>
                <View style={styles.checkBoxContainer}>
                  {days.map((day, index) => (
                    <CheckBox
                      key={index}
                      label={day}
                      onPress={isChecked =>
                        handleCheckBoxChange(day, isChecked)
                      }
                    />
                  ))}
                </View>
              </View>

              <View style={styles.timeRangeContainer}>
                <TextCustom color={LightCOLORS.blackyish}>
                  Select Time Range:
                </TextCustom>
                <View style={styles.timePickerContainer}>
                  <TouchableOpacity
                    style={[
                      styles.timePickerButton,
                      startTime && styles.selectedTime,
                    ]}
                    onPress={() => showTimepicker('start')}>
                    <Text style={styles.timePickerButtonText}>
                      {/* {startTime ? startTime : 'Select Start Time'} */}
                      Start time
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.timeRangeSeparator}>-</Text>
                  <TouchableOpacity
                    style={[
                      styles.timePickerButton,
                      endTime && styles.selectedTime,
                    ]}
                    onPress={() => showTimepicker('end')}>
                    <Text style={styles.timePickerButtonText}>
                      {/* {endTime ? endTime : 'Select End Time'} */}
                      Endtime
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateTask;
