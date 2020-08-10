import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeComponent, UserDetailsComponent} from '../';
import {
  CHILD_HOME_ROUTE,
  CHILD_USER_DETAILS_ROUTE,
} from '../../constants/navigation';

const {Navigator, Screen} = createStackNavigator();

export const HomeStackScreen = () => (
  <Navigator>
    <Screen name={CHILD_HOME_ROUTE} component={HomeComponent} />
    <Screen name={CHILD_USER_DETAILS_ROUTE} component={UserDetailsComponent} />
  </Navigator>
);
