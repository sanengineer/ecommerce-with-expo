import * as actionTypes from "./actionTypes";
import { UserServices } from "../../services";

export const whoAmiAction = (token) => (dispatch) => {
  //
  //debug
  console.log("token", token);
  UserServices.whoAmi(token)
    .then((res) => {
      //
      //debug
      console.log("whoami_action_res:", res.data);
      dispatch(whoAmiActionSuccess(res.data));
    })
    .catch((err) => {
      //
      //debug
      console.log("who_ami_action_err:", err);
      dispatch(whoAmiActionFail(err));
    });
};

export const whoAmiActionStart = () => ({
  type: actionTypes.WHO_AMI_START,
});

export const whoAmiActionSuccess = (who_ami_success) => ({
  type: actionTypes.WHO_AMI_SUCCESS,
  payload: { who_ami_success },
});

export const whoAmiActionFail = (who_ami_fail) => ({
  type: actionTypes.WHO_AMI_FAIL,
  payload: { who_ami_fail },
});
