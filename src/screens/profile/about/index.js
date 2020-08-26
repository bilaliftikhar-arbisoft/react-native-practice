import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  StyledCard,
  StyledContent,
  StyledTitle,
  StyledParagraph,
} from './styled';

export const About = () => {
  const {params} = useRoute();
  const {about} = params || {};
  return (
    <StyledCard>
      <StyledContent>
        <StyledTitle>About</StyledTitle>
        <StyledParagraph>{about}</StyledParagraph>
      </StyledContent>
    </StyledCard>
  );
};
