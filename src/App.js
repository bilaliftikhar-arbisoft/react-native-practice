import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {UserComponent, UserDetailsComponent} from './screens';

const {Navigator, Screen} = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="UserDetails">
        <Screen name="Users" component={UserComponent} />
        <Screen
          name="UserDetails"
          component={UserDetailsComponent}
          options={{title: 'Details'}}
        />
      </Navigator>
    </NavigationContainer>
  );
};
