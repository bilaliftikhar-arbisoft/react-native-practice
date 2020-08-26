import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  StyledCard,
  StyledContent,
  StyledTitle,
  StyledParagraph,
} from './styled';

export const Education = () => {
  const {params} = useRoute();
  const {education} = params || {};
  return (
    <StyledCard>
      <StyledContent>
        <StyledTitle>Education</StyledTitle>
        <StyledParagraph>{education}</StyledParagraph>
      </StyledContent>
      <StyledContent />
    </StyledCard>
  );
};
