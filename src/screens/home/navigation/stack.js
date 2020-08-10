import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeComponent, UserDetailsComponent} from '../..';
import {
  CHILD_HOME_ROUTE,
  CHILD_USER_DETAILS_ROUTE,
  CHILD_NOTIFICATION_ROUTE,
} from '../../../constants/navigation';
import {NestedNotificationDrawerScreen} from './drawer';

const {Navigator, Screen} = createStackNavigator();

export const HomeStackScreen = () => (
  <Navigator>
    <Screen name={CHILD_HOME_ROUTE} component={HomeComponent} />
    <Screen name={CHILD_USER_DETAILS_ROUTE} component={UserDetailsComponent} />
    <Screen
      name={CHILD_NOTIFICATION_ROUTE}
      component={NestedNotificationDrawerScreen}
    />
  </Navigator>
);
