import {
  ADD_USER,
  LOGIN_USER,
  GET_ACTIVE_USER,
  LOGOUT_USER,
  AUTHENTICATION_ERROR
} from "../actions/types";

const initialState = {
  users: [],
  activeUser: {},
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users]
      };
    case LOGIN_USER:
      return {
        ...state,
        activeUser: {
          ...state.activeUser
        }
      };
    case GET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state
      };
    default:
      return state;
  }
}
