import { CREATE_FAQ } from '../actions/faq';

let initState = {
  faq: [],
};

const faqReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_FAQ:
      return { ...state, faq: action.payload };
    default:
      return state;
  }
};

export default faqReducer;
