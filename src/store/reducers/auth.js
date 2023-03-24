import {
  AUTH_PROFILE,
  SET_USER,
  AUTH_CONFIRM,
  AUTH_PASSWORD_FORGOT,
} from '../actions/auth';
import { RESET_PASSWORD } from '../actions/reset-password';

let initState = {
  user: '',
};

const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case RESET_PASSWORD:
      return { ...state, user: action.payload };
    case AUTH_PROFILE:
      return { ...state, user: action.payload };
    case AUTH_CONFIRM:
      return { ...state, user: action.payload };
    case AUTH_PASSWORD_FORGOT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
