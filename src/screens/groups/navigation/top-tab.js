import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native';
import {
  CHILD_REQUESTED_ROUTE,
  CHILD_YOUR_GROUP_ROUTE,
} from '../../../constants/navigation';
import {RequestedScreen} from '../requested';
import {GroupScreen} from '..';
import {style} from './styled';

const {Navigator, Screen} = createMaterialTopTabNavigator();

export const GroupTabsScreen = () => {
  return (
    <SafeAreaView style={style}>
      <Navigator>
        <Screen name={CHILD_YOUR_GROUP_ROUTE} component={GroupScreen} />
        <Screen name={CHILD_REQUESTED_ROUTE} component={RequestedScreen} />
      </Navigator>
    </SafeAreaView>
  );
};
