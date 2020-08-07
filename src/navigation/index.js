import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserStackScreen} from '../screens/user/navigation';
import {HomeStackScreen} from '../screens/home/navigation';
import {PARENT_HOME_ROUTE, PARENT_USERS_ROUTE} from '../constants/navigation';

const {Navigator, Screen} = createBottomTabNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Navigator initialRouteName={PARENT_HOME_ROUTE}>
      <Screen name={PARENT_HOME_ROUTE} component={HomeStackScreen} />
      <Screen name={PARENT_USERS_ROUTE} component={UserStackScreen} />
    </Navigator>
  </NavigationContainer>
);
