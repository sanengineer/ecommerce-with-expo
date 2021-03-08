import * as actionTypes from "./actionTypes";
import { UserServices } from "../../services";
import { storeData } from "../../utils";

export const authLoginAction = (auth_data, navigation) => (dispatch) => {
  //
  //debug
  console.log("auth_data:", auth_data);
  console.log("navigation:", navigation);
  UserServices.authLogin(auth_data)
    .then((res) => {
      //
      //debug
      console.log("res", res.data);

      storeData("user", res.data);
      dispatch(authLoginActionSuccess(res.data));
      navigation.replace("SuccessLogin");
    })
    .catch((err) => {
      //
      //debug
      console.log("err:", err);
      dispatch(authLoginActionFail(err));
    });
};

export const authLoginActionStart = () => ({
  type: actionTypes.AUTH_LOGIN_START,
});

export const authLoginActionSuccess = (auth_login_success) => ({
  type: actionTypes.AUTH_LOGIN_SUCCESS,
  payload: { auth_login_success },
});

export const authLoginActionFail = (auth_login_fail) => ({
  type: actionTypes.AUTH_LOGIN_FAIL,
  payload: { auth_login_fail },
});
