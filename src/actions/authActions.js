import { LOGIN_SUCCESS } from "./types";
import history from "../history";

export const loginSuccess = () => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data
  });
};

export const logoutSuccess = () => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
  history.push("/login");
};
