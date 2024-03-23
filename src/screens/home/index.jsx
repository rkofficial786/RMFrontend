import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {container} from '../../utils/containerStyle';
import Button from '../../components/button';
import TextCustom from '../../components/textStyle';
import {COLORS, LightCOLORS} from '../../constants/colors';
import Button2 from '../../components/button2';
import Input from '../../components/input';
import CustomModal from '../../components/modal';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {textStyle} from '../../components/textStyle/textStyle';

const Home = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const {darkMode} = useSelector(state => state.other);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: darkMode ? COLORS.containerColor : LightCOLORS.white,
      }}>
      {/* <View style={styles.mainContainer}>
        <View style={styles.topContainer}></View>
        <View style={styles.bottomContainer}></View>
      </View> */}

      <View style={styles.firstTime}>
        <View style={styles.centerContainer}>
          <Pressable onPress={()=>navigation.navigate("creatTask")}>
          <Icon
            name="add-circle-outline"
            size={128}
            color={darkMode ? COLORS.white : LightCOLORS.primary}
          />
          </Pressable>

          <TextCustom
            color={LightCOLORS.blackyish}
            customStyle={textStyle.fs_600_18}>
            Create Your First Task
          </TextCustom>
        </View>
      </View>
    </View>
  );
};

export default Home;
