import React, {Fragment} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  StyledCard,
  StyledContent,
  StyledCover,
  StyledParagraph,
  StyledTitle,
  StyledIntro,
} from './styled';
import {
  CHILD_ABOUT_ROUTE,
  CHILD_ACTIVITY_ROUTE,
  CHILD_CONTACT_ROUTE,
  CHILD_EDUCATION_ROUTE,
  CHILD_EXPERIENCE_ROUTE,
  CHILD_SKILL_ROUTE,
} from '../../constants/navigation';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {item} = params || {};
  const {
    about,
    activity,
    education,
    experience,
    skill,
    contact,
    profile_image,
    first_name,
    last_name,
    email,
    intro,
  } = item;
  return (
    <Fragment>
      <ScrollView>
        <StyledCard>
          <StyledCover source={{uri: profile_image}} />
          <StyledContent>
            <StyledTitle>{first_name + '  ' + last_name}</StyledTitle>
            <StyledParagraph>{email}</StyledParagraph>
            <StyledIntro>{intro}</StyledIntro>
          </StyledContent>
        </StyledCard>

        <StyledCard
          onPress={() => navigation.navigate(CHILD_ABOUT_ROUTE, {about})}>
          <StyledContent>
            <StyledTitle>About</StyledTitle>
            <StyledParagraph>{about}</StyledParagraph>
          </StyledContent>
        </StyledCard>
        <StyledCard
          onPress={() =>
            navigation.navigate(CHILD_EDUCATION_ROUTE, {education})
          }>
          <StyledContent>
            <StyledTitle>Education</StyledTitle>
            <StyledParagraph>{education}</StyledParagraph>
          </StyledContent>
        </StyledCard>
        <StyledCard
          onPress={() =>
            navigation.navigate(CHILD_EXPERIENCE_ROUTE, {experience})
          }>
          <StyledContent>
            <StyledTitle>Experience</StyledTitle>
            <StyledParagraph>{experience}</StyledParagraph>
          </StyledContent>
        </StyledCard>
        <StyledCard
          onPress={() => navigation.navigate(CHILD_SKILL_ROUTE, {skill})}>
          <StyledContent>
            <StyledTitle>Skill</StyledTitle>
            <StyledParagraph>{skill}</StyledParagraph>
          </StyledContent>
        </StyledCard>
        <StyledCard
          onPress={() => navigation.navigate(CHILD_CONTACT_ROUTE, {contact})}>
          <StyledContent>
            <StyledTitle>Contact</StyledTitle>
            <StyledParagraph>{contact}</StyledParagraph>
          </StyledContent>
        </StyledCard>
        <StyledCard
          onPress={() => navigation.navigate(CHILD_ACTIVITY_ROUTE, {activity})}>
          <StyledContent>
            <StyledTitle>Activity</StyledTitle>
          </StyledContent>
        </StyledCard>
      </ScrollView>
    </Fragment>
  );
};
