import { RESET_PASSWORD } from '../actions/reset-password';

let initState = {
  user: '',
};

const resetPasswordRegister = (state = initState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default resetPasswordRegister;
