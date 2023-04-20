import {
  CONFIRM_TOKEN_REQUEST,
  CONFIRM_TOKEN_SUCCESS,
  CONFIRM_TOKEN_FAILURE,
} from './actions';

const initialState = {
  isFetching: false,
  error: null,
  confirmed: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case CONFIRM_TOKEN_REQUEST:
      return { ...state, isFetching: true };
    case CONFIRM_TOKEN_SUCCESS:
      return { ...state, isFetching: false, confirmed: true };
    case CONFIRM_TOKEN_FAILURE:
      return { ...state, isFetching: false, error: action.payload.error };
    default:
      return state;
  }
}

export default authReducer;
