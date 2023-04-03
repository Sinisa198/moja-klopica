import { CREATE_ORDER } from '../actions/order';

let initState = {
  orders: [],
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
