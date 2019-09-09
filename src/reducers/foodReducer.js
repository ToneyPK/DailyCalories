import { GET_FOOD, ADD_FOOD, DELETE_FOOD } from "../actions/types";

const initialState = {
  food: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD:
      return {
        ...state,
        food: action.payload
      };
    case ADD_FOOD:
      return {
        ...state,
        food: [...state.food, action.payload]
      };
    case DELETE_FOOD:
      return {
        ...state,
        food: state.food.filter(food => food.id !== action.payload.id)
      };
    default:
      return state;
  }
}
