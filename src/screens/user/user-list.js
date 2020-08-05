import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {Wrapper, Text, View} from './styled';
import {selectUsers} from '../../selectors/user';

export const UserListComponent = () => {
  const users = useSelector(selectUsers);

  return (
    <Fragment>
      <Wrapper>
        {users.length > 0 &&
          users.map((user, index) => (
            <View key={index}>
              <Text>{user}</Text>
            </View>
          ))}
      </Wrapper>
    </Fragment>
  );
};
