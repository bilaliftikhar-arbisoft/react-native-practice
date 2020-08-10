import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CHILD_VIDEO_ROUTE} from '../../../constants/navigation';
import {VideoScreen} from '..';

const {Navigator, Screen} = createStackNavigator();

export const VideoStackScreen = () => (
  <Navigator>
    <Screen name={CHILD_VIDEO_ROUTE} component={VideoScreen} />
  </Navigator>
);
