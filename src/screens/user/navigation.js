import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserDetailsComponent, UserComponent} from '../';

const {Navigator, Screen} = createStackNavigator();

export const UserStackScreen = () => (
  <Navigator>
    <Screen name="Users" component={UserComponent} />
    <Screen name="Details" component={UserDetailsComponent} />
  </Navigator>
);
