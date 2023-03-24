import {
  SET_ALL_RESTAURANT,
  SET_ACTIVE_MENU,
  SET_ACTIVE_RESTAURANT,
} from '../actions/restaurant';

let initState = {
  restaurants: [],
};

const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ALL_RESTAURANT:
      return { ...state, restaurants: action.payload };
    default:
      return state;
    case SET_ACTIVE_MENU:
      return { ...state, restaurants: action.payload };
    case SET_ACTIVE_RESTAURANT:
      return { ...state, restaurants: action.payload };
  }
};

export default clientReducer;
