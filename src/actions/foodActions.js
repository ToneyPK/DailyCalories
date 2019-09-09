import { GET_FOOD, ADD_FOOD, DELETE_FOOD } from "./types";
import { url } from "../helpers/hostURL";
import axios from "axios";

export const getFood = () => async dispatch => {
  const res = await axios.get(`${url}/food/user`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`
    }
  });
  dispatch({
    type: GET_FOOD,
    payload: res.data
  });
};

export const addFood = food => async dispatch => {
  const foodFormatted = {
    foodName: food.foodName,
    calories: food.foodCalories,
    dayId: food.dayId
  };

  try {
    const res = await axios.post(`${url}/food`, foodFormatted, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`
      }
    });
    dispatch({
      type: ADD_FOOD,
      payload: res.data
    });
  } catch (error) {}
};

export const deleteFoodById = id => async dispatch => {
  const res = await axios.delete(`${url}/food/${id}`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`
    }
  });
  dispatch({
    type: DELETE_FOOD,
    payload: res.data
  });
};
