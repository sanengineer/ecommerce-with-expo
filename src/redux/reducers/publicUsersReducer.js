import {
  FETCH_PUBLIC_USERS_START,
  FETCH_PUBLIC_USERS_SUCCESS,
  FETCH_PUBLIC_USERS_FAIL,
} from '../actions/actionTypes';

const intialState = {
  public_users: [],
  loading: false,
  error: null,
};

export default function publicUsersReducer(state = intialState, action) {
  switch (action.type) {
    case FETCH_PUBLIC_USERS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PUBLIC_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        public_users: action.payload.public_users,
      };
    case FETCH_PUBLIC_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        public_users: [],
      };
    default:
      return state;
  }
}
