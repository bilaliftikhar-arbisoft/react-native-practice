import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserDetailsComponent, UserComponent} from '../';
import {
  CHILD_USERS_ROUTE,
  CHILD_USER_DETAILS_ROUTE,
} from '../../constants/navigation';

const {Navigator, Screen} = createStackNavigator();

export const UserStackScreen = () => (
  <Navigator>
    <Screen name={CHILD_USERS_ROUTE} component={UserComponent} />
    <Screen name={CHILD_USER_DETAILS_ROUTE} component={UserDetailsComponent} />
  </Navigator>
);
