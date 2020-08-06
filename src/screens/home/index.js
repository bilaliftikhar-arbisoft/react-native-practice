import React from 'react';
import {View, Text, Button} from './styled';

export const HomeComponent = ({navigation}) => (
  <View>
    <Text>Home screen</Text>
    <Button
      title="Go to User Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);
