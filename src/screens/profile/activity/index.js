import React from 'react';
import {useRoute} from '@react-navigation/native';
import {FlatList} from 'react-native';
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
        <FlatList
          data={activity}
          renderItem={({item}) => (
            <StyledParagraph>{item.name}</StyledParagraph>
          )}
          keyExtractor={(activity) => activity.id}
        />
      </StyledContent>
      <StyledContent />
    </StyledCard>
  );
};
