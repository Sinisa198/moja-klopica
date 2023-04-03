import { REVIEW } from '../actions/review';

let initState = {
  review: '',
};

const reviewReducer = (state = initState, action) => {
  switch (action.type) {
    case REVIEW:
      return { ...state, review: action.payload };
    default:
      return state;
  }
};

export default reviewReducer;
