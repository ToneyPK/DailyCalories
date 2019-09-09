import { GET_DAYS, ADD_CALORIES, SUBTRACT_CALORIES } from "./types";
import { url } from "../helpers/hostURL";
import axios from "axios";

export const getDays = id => async dispatch => {
  const res = await axios.get(`${url}/days/user/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
  dispatch({
    type: GET_DAYS,
    payload: res.data
  });
};
export const addDayCaloriesIn = info => async dispatch => {
  dispatch({
    type: ADD_CALORIES,
    payload: info
  });
};

export const subtractDayCaloriesIn = info => async dispatch => {
  dispatch({
    type: SUBTRACT_CALORIES,
    payload: info
  });
};
