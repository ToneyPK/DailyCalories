import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import dayReducer from "./dayReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

export default combineReducers({
  food: foodReducer,
  days: dayReducer,
  users: userReducer,
  auth: authReducer
});
