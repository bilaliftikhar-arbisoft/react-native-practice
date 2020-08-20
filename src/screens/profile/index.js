import React from 'react';
import {View, Text, Button} from './styled';
import {useNavigation, useRoute} from '@react-navigation/native';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {item} = params || {};
  return (
    <View>
      {!item ? <Text>My Profile</Text> : <Text>{item.last_name}</Text>}
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
