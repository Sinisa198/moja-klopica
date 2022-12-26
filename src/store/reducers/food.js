import { ADD_FOOD, DELETE_FOOD } from '../actions/food';

let initState = {
  foods: [],
};

const foodReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return { ...state, foods: [...state.foods, action.payload] };
    default:
      return state;

    case DELETE_FOOD:
      return { ...state, foods: state.foods.filter((i) => i.id !== this.id) };
  }
};

export default foodReducer;
