import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserStackScreen} from '../screens/user/navigation';
import {HomeStackScreen} from '../screens/home/navigation';

const {Navigator, Screen} = createBottomTabNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeStackScreen} />
      <Screen name="Users" component={UserStackScreen} />
    </Navigator>
  </NavigationContainer>
);
