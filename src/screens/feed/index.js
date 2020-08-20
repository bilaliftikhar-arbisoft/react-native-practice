import React, {useRef} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {PARENT_PROFILE_ROUTE} from '../../constants/navigation';
import {useScrollToTop, useNavigation} from '@react-navigation/native';
import {users} from '../../assets/dummy-data';
import {
  StyledActions,
  StyledCard,
  StyledButton,
  StyledContent,
  StyledCover,
  StyledParagraph,
  StyledTitle,
} from './styled';

export const Feed = () => {
  const navigation = useNavigation();
  const ref = useRef();
  useScrollToTop(ref);

  const renderFeed = ({item}) => (
    <StyledCard>
      <StyledCover source={{uri: 'https://picsum.photos/700'}} />
      <StyledContent>
        <StyledTitle
          onPress={() =>
            navigation.navigate(PARENT_PROFILE_ROUTE, {
              screen: PARENT_PROFILE_ROUTE,
              params: {item},
            })
          }>
          {item.first_name + '  ' + item.last_name}
        </StyledTitle>
        <StyledParagraph>{item.email}</StyledParagraph>
      </StyledContent>
      <StyledActions>
        <StyledButton mode="contained">Follow</StyledButton>
        <StyledButton mode="outlined">Block</StyledButton>
      </StyledActions>
    </StyledCard>
  );

  return (
    <FlatList
      ref={ref}
      data={users}
      renderItem={renderFeed}
      keyExtractor={(user) => user.id}
    />
  );
};
