import {createSelector} from 'reselect';

const userSelector = (state) => state.user;

const getUsers = (user) => user.users;

export const selectUsers = createSelector(userSelector, getUsers);
