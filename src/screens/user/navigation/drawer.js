import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {UserStackScreen} from './stack';
import {CHILD_USERS_ROUTE} from '../../../constants/navigation';

const {Navigator, Screen} = createDrawerNavigator();

export const UserDrawerScreen = () => (
  <Navigator>
    <Screen name={CHILD_USERS_ROUTE} component={UserStackScreen} />
  </Navigator>
);
