import React, {Fragment} from 'react';
import {UserAddComponent} from './user-add';
import {UserListComponent} from './user-list';
export const UserComponent = () => {
  return (
    <Fragment>
      <UserAddComponent />
      <UserListComponent />
    </Fragment>
  );
};
