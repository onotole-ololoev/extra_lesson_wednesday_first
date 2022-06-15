import {UserType} from 'types';
import React, {FC} from 'react';
import {User} from 'components/User';

type PropsType = {
  users: UserType[];
};

export const UsersList: React.FC<PropsType> = React.memo(({users}) => {
  return (
    <>
      {users.map(({id, name}) => <User key={id} id={id} name={name} />)}
    </>
  );
});
