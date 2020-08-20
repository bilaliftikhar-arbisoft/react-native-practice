import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  PARENT_PROFILE_ROUTE,
  CHILD_ABOUT_ROUTE,
  CHILD_ACTIVITY_ROUTE,
  CHILD_CONTACT_ROUTE,
  CHILD_EDUCATION_ROUTE,
  CHILD_EXPERIENCE_ROUTE,
  CHILD_SKILL_ROUTE,
} from '../../../constants/navigation';
import {ProfileScreen} from '..';
import {About} from '../about';
import {Activity} from '../activity';
import {Contact} from '../contact';
import {Education} from '../education';
import {Experience} from '../experience';
import {Skill} from '../skill';

const {Navigator, Screen} = createStackNavigator();

export const ProfileStack = () => (
  <Navigator initialRouteName={PARENT_PROFILE_ROUTE}>
    <Screen name={PARENT_PROFILE_ROUTE} component={ProfileScreen} />
    <Screen name={CHILD_ABOUT_ROUTE} component={About} />
    <Screen name={CHILD_ACTIVITY_ROUTE} component={Activity} />
    <Screen name={CHILD_CONTACT_ROUTE} component={Contact} />
    <Screen name={CHILD_EDUCATION_ROUTE} component={Education} />
    <Screen name={CHILD_EXPERIENCE_ROUTE} component={Experience} />
    <Screen name={CHILD_SKILL_ROUTE} component={Skill} />
  </Navigator>
);
