import { FORGET_PASSWORD } from '../actions/forget-password';

let initState = {
  email: '',
};

const forgetPasswordReducer = (state = initState, action) => {
  switch (action.type) {
    case FORGET_PASSWORD:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default forgetPasswordReducer;
