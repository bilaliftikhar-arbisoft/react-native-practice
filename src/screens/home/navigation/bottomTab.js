import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeComponent,
  MyNetworkScreen,
  NotificationScreen,
  JobScreen,
  PostScreen,
} from '../..';
import {
  PARENT_HOME_ROUTE,
  PARENT_MY_NETWORK_ROUTE,
  PARENT_NOTIFICATION_ROUTE,
  PARENT_JOB_ROUTE,
  PARENT_POST_ROUTE,
} from '../../../constants/navigation';

const {Navigator, Screen} = createBottomTabNavigator();

export const HomeBottomTabScreen = () => (
  <Navigator>
    <Screen name={PARENT_HOME_ROUTE} component={HomeComponent} />
    <Screen name={PARENT_MY_NETWORK_ROUTE} component={MyNetworkScreen} />
    <Screen name={PARENT_POST_ROUTE} component={PostScreen} />
    <Screen name={PARENT_NOTIFICATION_ROUTE} component={NotificationScreen} />
    <Screen name={PARENT_JOB_ROUTE} component={JobScreen} />
  </Navigator>
);
