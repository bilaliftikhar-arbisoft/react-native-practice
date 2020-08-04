/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {UserComponent} from './screens';
import {SafeAreaView, ScrollView} from 'react-native';

export const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <UserComponent />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
