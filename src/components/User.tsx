import React, {FC, memo} from 'react';
import {UserType} from 'types';

export const User: React.FC<UserType> = React.memo(({id, name}) => {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Id: {id}</div>
    </div>
  );
});
