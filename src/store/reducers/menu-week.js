import { MENU_WEEK } from '../actions/restaurant';

let initState = {
  menuWeeks: [],
};

const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case MENU_WEEK:
      return { ...state, menuWeeks: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
