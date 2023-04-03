import { SAVE_TOKEN } from '../actions/token';

const initialState = {
  token: null,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default tokenReducer;
