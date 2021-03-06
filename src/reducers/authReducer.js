import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/types";

const initialState = {
  loggedIn: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false
      };

    default:
      return state;
  }
}
