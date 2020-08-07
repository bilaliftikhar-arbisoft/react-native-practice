import React from 'react';
import {StyledView, Text, Button} from './styled';

export const UserDetailsComponent = ({route, navigation}) => {
  const {user} = route.params || {};
  return (
    <StyledView>
      {!user && <Text>Nothing to Display...</Text>}
      <Text>{user}</Text>
      <Button
        title="Go to Users"
        onPress={() => navigation.navigate('Users')}
      />
    </StyledView>
  );
};
