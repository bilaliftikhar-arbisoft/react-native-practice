import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  StyledCard,
  StyledContent,
  StyledTitle,
  StyledParagraph,
} from './styled';

export const Experience = () => {
  const {params} = useRoute();
  const {experience} = params || {};
  return (
    <StyledCard>
      <StyledContent>
        <StyledTitle>Experience</StyledTitle>
        <StyledParagraph>{experience}</StyledParagraph>
      </StyledContent>
      <StyledContent />
    </StyledCard>
  );
};
