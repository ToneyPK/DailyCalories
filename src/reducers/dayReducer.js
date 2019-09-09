import { GET_DAYS, ADD_CALORIES, SUBTRACT_CALORIES } from "../actions/types";

const initialState = {
  days: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DAYS:
      return {
        ...state,
        days: action.payload
      };
    case ADD_CALORIES:
      return {
        ...state,
        days: state.days.map(day => {
          const newCalories = parseInt(action.payload.foodCalories);
          if (day.id === action.payload.dayId) {
            return {
              ...day,
              caloriesIn: newCalories + day.caloriesIn
            };
          }
          return day;
        })
      };

    case SUBTRACT_CALORIES:
      return {
        ...state,
        days: state.days.map(day => {
          const newCalories = parseInt(action.payload.calories);
          if (day.id === action.payload.dayId) {
            return {
              ...day,
              caloriesIn: day.caloriesIn - newCalories
            };
          }
          return day;
        })
      };

    default:
      return state;
  }
}
