import { ADD_FOOD, REMOVE_FROM_CART } from '../actions/food';

let initState = {
  foods: [],
  sum: 0,
};

const foodReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      const sameFoodIndex = state.foods.findIndex(
        (food) => food.name === action.payload.name
      );

      if (sameFoodIndex >= 0) {
        let foods = [...state.foods];
        foods[sameFoodIndex] = {
          ...foods[sameFoodIndex],
          count: foods[sameFoodIndex].count
            ? foods[sameFoodIndex].count + 1
            : 2,
        };

        return {
          ...state,
          sum: state.sum + action.payload.price,
          foods,
        };
      }

      return {
        ...state,
        foods: [...state.foods, action.payload],
        sum: state.sum + action.payload.price,
      };

    default:
      return state;
  }
};

export default foodReducer;
