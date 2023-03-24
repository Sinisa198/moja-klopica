import { SET_ALL_OWNER } from '../actions/owner';

let initState = {
  owners: [],
};

const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ALL_OWNER:
      return { ...state, owners: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
