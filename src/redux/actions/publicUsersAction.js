import * as actionTypes from './actionTypes';
import UserServices from '../../services/userServices';

export const fetchPublicUsers = () => (dispatch) => {
  UserServices.fetchAllUsers()
    .then((res) => {
      //
      //
      //debug
      console.log('res', res);
      dispatch(fetchPublicUsersSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchPublicUsersFail(err));
    });
};

export const fetchPublicUsersStart = () => ({
  type: actionTypes.FETCH_PUBLIC_USERS_START,
});

export const fetchPublicUsersSuccess = (public_users) => ({
  type: actionTypes.FETCH_PUBLIC_USERS_SUCCESS,
  payload: {public_users},
});

export const fetchPublicUsersFail = (error) => ({
  type: actionTypes.FETCH_PUBLIC_USERS_FAIL,
  payload: {error},
});
