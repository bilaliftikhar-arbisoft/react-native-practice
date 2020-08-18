import React from 'react';
import {SafeAreaView} from 'react-native';

import {style} from './styled';
import {Feed} from '../';

export const HomeComponent = () => {
  return (
    <SafeAreaView style={style}>
      <Feed />
    </SafeAreaView>
  );
};
