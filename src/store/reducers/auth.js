import { AUTH_PROFILE, SET_USER, LOGIN_FAILURE } from '../actions/auth';
import { RESET_PASSWORD } from '../actions/reset-password';

let initState = {
  user: {
    name: '',
    surname: '',
  },
  stateError: null,
};

const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case RESET_PASSWORD:
      return { ...state, user: action.payload };
    case AUTH_PROFILE:
      return { ...state, user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, stateError: action.payload };

    default:
      return state;
  }
};

export default clientReducer;
