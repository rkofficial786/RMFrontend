import React from 'react';
import { View, Text } from 'react-native';

import HomeSVG from '../../assets/svg/homeSVG';
import SearchSVG from '../../assets/svg/searchSVG';
import InteractionSVG from '../../assets/svg/interactionSVG';

import UserSVG from '../../assets/svg/userSVG';
import { COLORS, LightCOLORS } from '../../constants/colors';
import sizer from '../../helpers/sizer';
import TextCustom from '../textStyle';
import { OPENSANS } from '../../constants/fonts';
import { styles } from './styles';
import NotificationSVG from '../../assets/svg/notificationSVG';
import BellIcon from '../../assets/svg/bellIConSVG';
import { useSelector } from 'react-redux';

interface TabBarIconProps {
  label: string;
  icon: string;
  focused: boolean;
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({
  label,
  icon,
  focused,
}) => {

  const { darkMode } = useSelector((state) => state.other)
  // const getIconColor = () => (focused ? COLORS.theme_text_color : COLORS.dark_gray_text_color);
  const getIconColor = () =>
    focused ? darkMode ? COLORS.white : LightCOLORS.primary : darkMode ? COLORS.textSecondary : LightCOLORS.primaryReduced

  const getTextColor = () =>
    focused ? darkMode ? COLORS.white : LightCOLORS.primary : darkMode ? COLORS.textSecondary : LightCOLORS.primaryReduced;

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View>
        {icon === 'Home' && (
          <HomeSVG
            width={sizer.horizontalScale(22)}
            height={sizer.horizontalScale(22)}
            color={getIconColor()}
          />
        )}
        {icon === 'Search' && (
          <SearchSVG
            width={sizer.horizontalScale(22)}
            height={sizer.horizontalScale(22)}
            color={getIconColor()}
          />
        )}
        {icon === 'Interaction' && (
          <View style={{ position: 'relative' }}>
            <View style={styles.dot}></View>
            <InteractionSVG
              width={sizer.horizontalScale(22)}
              height={sizer.horizontalScale(22)}
              color={getIconColor()}
            />
          </View>
        )}
        {icon === 'Favourite' && (
          <View style={{ position: 'relative' }}>
            <View style={styles.dot}></View>
            <BellIcon
              width={sizer.horizontalScale(17)}
              height={sizer.horizontalScale(22)}
              color={getIconColor()}
            />
          </View>
        )}
        {icon === 'User' && (
          <UserSVG
            width={sizer.horizontalScale(22)}
            height={sizer.horizontalScale(22)}
            color={getIconColor()}
          />
        )}
      </View>
      <TextCustom
        customStyle={{
          color: getTextColor(),
          fontSize: 10,
          paddingBottom: sizer.horizontalScale(6),
          paddingTop: sizer.horizontalScale(2),
          lineHeight: 13,
          fontWeight: '700',
          fontFamily: OPENSANS.bold,
        }}>
        {label}
      </TextCustom>
    </View>
  );
};
