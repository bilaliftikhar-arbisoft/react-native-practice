import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  StyledCard,
  StyledContent,
  StyledTitle,
  StyledParagraph,
} from './styled';

export const Contact = () => {
  const {params} = useRoute();
  const {contact} = params || {};
  return (
    <StyledCard>
      <StyledContent>
        <StyledTitle>Contact Details</StyledTitle>
        <StyledParagraph>{contact}</StyledParagraph>
      </StyledContent>
      <StyledContent />
    </StyledCard>
  );
};
