import React, {Fragment} from 'react';

import {UserComponent} from './screens';
import {SafeAreaView, ScrollView} from 'react-native';

export const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <UserComponent />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};
