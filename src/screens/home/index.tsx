import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { container } from '../../utils/containerStyle';
import Button from '../../components/button';
import TextCustom from '../../components/textStyle';
import { COLORS, LightCOLORS } from '../../constants/colors';
import Button2 from '../../components/button2';
import Input from '../../components/input';
import CustomModal from '../../components/modal';
import { useSelector } from 'react-redux';

const Home = () => {
  const [modal, setModal] = useState(false)
  const { darkMode } = useSelector((state) => state.other)
  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? COLORS.containerColor : LightCOLORS.white }}>
      <TextCustom color={COLORS.buttonPrimary}>indexaa</TextCustom>

      <View style={{ margin: 130, gap: 20 }}>
        <Button onPress={() => setModal(true)}>Button</Button>
        <Button2>Cancel</Button2>

        <Input error="errors" placeholder="Enter Name" />
        <CustomModal onClose={() => setModal(false)} visible={modal} heading="Create Task" >
          <Text style={{ color: 'white' }}>
            hii hii Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Qui necessitatibus, eum dicta sapiente voluptas at dolores ea porro
            quam aliquid sed rerum laborum vel. Necessitatibus quo nobis fugit
            provident eveniet.
          </Text>
        </CustomModal>
      </View>
    </View>
  );
};

export default Home;
