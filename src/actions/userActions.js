import {
  ADD_USER,
  LOGIN_USER,
  AUTHENTICATION_ERROR,
  GET_ACTIVE_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_SUCCESS
} from "./types";
import axios from "axios";
import { url } from "../helpers/hostURL";
import history from "../helpers/history";

export const addUser = user => async dispatch => {
  const res = await axios.post(`${url}/users`, user);

  dispatch({
    type: ADD_USER,
    payload: res.data
  });
};

export function loginUser(username, password) {
  return async dispatch => {
    try {
      const res = await axios.post(`${url}/login`, {
        username,
        password
      });
      dispatch({ type: LOGIN_USER });
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem("token", res.headers.authorization);
      history.push("/");
      logoutTimeout();
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Invalid username or password"
      });
    }
  };
}

const logoutTimeout = () => {
  setTimeout(function() {
    localStorage.removeItem("token");
    history.push("/login");
  }, 3600000);
};

export function getActiveUser() {
  return async dispatch => {
    try {
      const res = await axios.get(`${url}/user`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`
        }
      });
      dispatch({
        type: LOGIN_SUCCESS
      });
      dispatch({
        type: GET_ACTIVE_USER,
        payload: res.data
      });
    } catch (error) {}
  };
}

export function logOutUser() {
  return async dispatch => {
    try {
      localStorage.removeItem("token");
      history.push("/login");
      dispatch({
        type: LOGOUT_USER
      });
      dispatch({
        type: LOGOUT_SUCCESS
      });
    } catch (error) {}
  };
}
