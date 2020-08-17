import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  PARENT_HOME_ROUTE,
  PARENT_PROFILE_ROUTE,
  PARENT_SETTINGS_ROUTE,
  PARENT_GROUP_ROUTE,
  PARENT_EVENET_ROUTE,
} from '../constants/navigation';
import {SettingsScreen, EventScreen} from '../screens';
import {HomeBottomTabScreen} from '../screens/home/navigation/bottomTab';
import {ProfileStack} from '../screens/profile/navigation';
import {GroupTabsScreen} from '../screens/groups/navigation/top-tab';
const {Navigator, Screen} = createDrawerNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Navigator initialRouteName={PARENT_HOME_ROUTE}>
      <Screen name={PARENT_HOME_ROUTE} component={HomeBottomTabScreen} />
      <Screen name={PARENT_PROFILE_ROUTE} component={ProfileStack} />
      <Screen name={PARENT_SETTINGS_ROUTE} component={SettingsScreen} />
      <Screen name={PARENT_GROUP_ROUTE} component={GroupTabsScreen} />
      <Screen name={PARENT_EVENET_ROUTE} component={EventScreen} />
    </Navigator>
  </NavigationContainer>
);
