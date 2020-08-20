import React from 'react';
// import {FlatList} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {
  StyledCard,
  StyledContent,
  StyledTitle,
  StyledParagraph,
} from './styled';

export const Activity = () => {
  const {params} = useRoute();
  const {activity} = params || {};
  return (
    <StyledCard>
      <StyledContent>
        <StyledTitle>Activity</StyledTitle>
        {/* <FlatList
        data={activity}
        renderItem={({item}) => <StyledParagraph>{item.name}</StyledParagraph>}
        keyExtractor={(activity) => activity.id}
      /> */}
        {activity.map(({name, id}) => (
          <StyledParagraph key={id}>{name}</StyledParagraph>
        ))}
      </StyledContent>
      <StyledContent />
    </StyledCard>
  );
};
