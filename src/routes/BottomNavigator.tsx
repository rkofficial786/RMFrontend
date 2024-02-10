import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Home from '../screens/home';
import Settings from '../screens/setting';

import { TabBarIcon } from '../components/tabbar-icon';

import sizer from '../helpers/sizer';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { COLORS, LightCOLORS } from '../constants/colors';

const Bottom = createBottomTabNavigator();

const tabConfig = [
  { name: 'Home', component: Home, icon: 'Home' },

  { name: 'Settings', component: Settings, icon: 'User' },
];

const BottomNavigator = () => {

  const { darkMode } = useSelector((state) => state.other)
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: [styles.tab_bar, { backgroundColor: darkMode ? COLORS.blackyish : LightCOLORS.white ,borderTopColor:darkMode?COLORS.primary:LightCOLORS.textSecondary }],
        // tabBarBackground: () => <View style={styles.top_bar_bg}></View>,
        tabBarInactiveTintColor: 'transparent',
        tabBarActiveTintColor: 'transparent',
      }}>
      {tabConfig.map(({ name, component, icon }, index) => (
        <Bottom.Screen
          key={index}
          name={name}
          component={component}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused }) => (
              <TabBarIcon label={name} icon={icon} focused={focused} />
            ),
          }}
        />
      ))}
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
