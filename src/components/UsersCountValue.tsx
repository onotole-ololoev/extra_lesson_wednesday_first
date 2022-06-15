import React from 'react';

type PropsType = {
  usersCount: number;
};

export const UsersCountValue: React.FC<PropsType> = React.memo(({usersCount}) => {
  const newUsersCount = usersCount;

  return <span>Users count: {newUsersCount}</span>;
});
