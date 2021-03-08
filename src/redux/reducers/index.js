import { combineReducers } from "redux";

import authLoginReducer from "./authLoginReducer";
import whoAmiReducer from "./whoAmiReducers";
import public_users from "./publicUsersReducer";
import globalReducer from "./global";

export default combineReducers({
  authLoginReducer: authLoginReducer,
  who_ami_reducer: whoAmiReducer,
  globalReducer: globalReducer,
  public_users: public_users,
});
