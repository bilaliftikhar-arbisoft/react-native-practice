import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PARENT_HOME_ROUTE, PARENT_USERS_ROUTE} from '../constants/navigation';
import {HomeDrawerScreen} from '../screens/home/navigation';
import {UserDrawerScreen} from '../screens/user/navigation';

const {Navigator, Screen} = createBottomTabNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Navigator initialRouteName={PARENT_HOME_ROUTE}>
      <Screen name={PARENT_HOME_ROUTE} component={HomeDrawerScreen} />
      <Screen name={PARENT_USERS_ROUTE} component={UserDrawerScreen} />
    </Navigator>
  </NavigationContainer>
);
