import { RESET_PASSWORD } from '../actions/reset-password';

let initState = {
  oldPassword: '',
  newPassword: '',
};

const resetPasswordRegister = (state = initState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return { ...state, oldPassword: action.payload };
    default:
      return state;
  }
};

export default resetPasswordRegister;
