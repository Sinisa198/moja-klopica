import { combineReducers } from 'redux';
import foodReducer from './food';

const store = combineReducers({
  foodReducer,
});
export default store;
