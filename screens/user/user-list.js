import React from 'react';
import {useSelector} from 'react-redux';
import {Wrapper, Text, View} from './styled';

export const UserListComponent = () => {
  const {users} = useSelector((state) => state.user);

  return (
    <>
      <Wrapper>
        {users.length > 0 &&
          users.map((user, index) => (
            <View key={index}>
              <Text>{user}</Text>
            </View>
          ))}
      </Wrapper>
    </>
  );
};
