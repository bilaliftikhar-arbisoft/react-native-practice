import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  StyledCard,
  StyledContent,
  StyledTitle,
  StyledParagraph,
} from './styled';

export const Skill = () => {
  const {params} = useRoute();
  const {skill} = params || {};
  return (
    <StyledCard>
      <StyledContent>
        <StyledTitle>Skill</StyledTitle>
        <StyledParagraph>{skill}</StyledParagraph>
      </StyledContent>
      <StyledContent />
    </StyledCard>
  );
};
