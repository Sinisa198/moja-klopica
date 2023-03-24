import { SET_REGISTER } from '../actions/register';

let initState = {
  user: '',
};

const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_REGISTER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default registerReducer;
