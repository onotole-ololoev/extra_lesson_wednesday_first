import {RootStateOrAny} from 'react-redux';

export const selectUsersCount = (state: RootStateOrAny): number => state.userCount.count;
