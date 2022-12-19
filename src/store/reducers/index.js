import { combineReducers } from 'redux';
import foodReducer from './food';

console.log('food red :', foodReducer);
const store = combineReducers({
  reducer: foodReducer,
});
export default store;
