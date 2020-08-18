import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  PARENT_PROFILE_ROUTE,
  PARENT_JOB_ROUTE,
} from '../../../constants/navigation';
import {ProfileScreen} from '..';
import {JobScreen} from '../../job';
import {useRoute} from '@react-navigation/native';

const {Navigator, Screen} = createStackNavigator();

export const ProfileStack = () => {
  const route = useRoute();
  console.log('---->', route);
  return (
    <Navigator initialRouteName={PARENT_PROFILE_ROUTE}>
      <Screen
        name={PARENT_PROFILE_ROUTE}
        component={ProfileScreen}
        // route={route
      />
      <Screen name={PARENT_JOB_ROUTE} component={JobScreen} />
    </Navigator>
  );
};
