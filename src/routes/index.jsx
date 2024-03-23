import {View, Text} from 'react-native';
import React from 'react';

// import Login from '../screens/login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import BottomNavigator from './BottomNavigator';
import Signup from '../screens/auth/signup';
import OTPverify from '../screens/auth/otp';
import Login from '../screens/auth/login';
import CreateTask from '../screens/createTask';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OTP" component={OTPverify} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="creatTask" component={CreateTask} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
