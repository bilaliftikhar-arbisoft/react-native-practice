import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  PARENT_PROFILE_ROUTE,
  PARENT_JOB_ROUTE,
} from '../../../constants/navigation';
import {ProfileScreen} from '..';
import {JobScreen} from '../../job';

const {Navigator, Screen} = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Navigator initialRouteName={PARENT_PROFILE_ROUTE}>
      <Screen name={PARENT_PROFILE_ROUTE} component={ProfileScreen} />
      <Screen name={PARENT_JOB_ROUTE} component={JobScreen} />
    </Navigator>
  );
};
