import { SET_ALL_CLIENTS } from '../actions/client';

let initState = {
  clients: [],
};

const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ALL_CLIENTS:
      return { ...state, clients: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
