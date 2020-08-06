import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Wrapper, Text, View} from './styled';
import {selectUsers} from '../../selectors/user';

export const UserListComponent = () => {
  const users = useSelector(selectUsers);
  const navigation = useNavigation();

  return (
    <Fragment>
      <Wrapper>
        {users.length > 0 &&
          users.map((user, index) => (
            <View key={index}>
              <Text onPress={() => navigation.navigate('UserDetails', {user})}>
                {user}
              </Text>
            </View>
          ))}
      </Wrapper>
    </Fragment>
  );
};
