import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeComponent, UserDetailsComponent} from '../';

const {Navigator, Screen} = createStackNavigator();

export const HomeStackScreen = () => (
  <Navigator>
    <Screen name="Home" component={HomeComponent} />
    <Screen name="Details" component={UserDetailsComponent} />
  </Navigator>
);
