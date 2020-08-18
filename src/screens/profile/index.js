import React from 'react';
import {View, Text, Button} from './styled';
import {useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
