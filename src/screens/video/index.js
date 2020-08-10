/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';

export const VideoScreen = () => (
  <View
    style={{
      flexDirection: 'row',
      flexWrap: 1,
      margin: 10,
      height: 150,
    }}>
    <View style={{width: 240}}>
      <Image
        style={{height: 150}}
        source={{uri: 'https://picsum.photos/700'}}
      />
    </View>
    <View style={{width: 115, backgroundColor: 'grey'}}>
      <View
        style={{
          height: 75,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'black',
          borderStyle: 'solid',
        }}>
        <IconButton
          icon="thumb-up"
          color={Colors.red500}
          size={20}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View
        style={{
          height: 75,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconButton
          icon="thumb-down"
          color={Colors.red500}
          size={20}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  </View>
);
