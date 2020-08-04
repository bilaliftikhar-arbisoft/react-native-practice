import React from 'react';
import {UserAddComponent} from './user-add';
import {UserListComponent} from './user-list';

export const UserComponent = () => {
  return (
    <>
      <UserAddComponent />
      <UserListComponent />
    </>
  );
};
