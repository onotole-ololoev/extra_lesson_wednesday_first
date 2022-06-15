import {createUser} from 'store/actions';
import {UserType} from 'types';

const initState = {
  users: [] as UserType[],
};

type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof createUser>;

export const usersReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {    
    case 'CREATE_USER':
      let newUser = {
        id: action.payload.id,
        name: action.payload.name
      }
      return {
        users: [...state.users, newUser] as UserType[],
      };
    default:
      return state;
  }
};
