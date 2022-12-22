import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

const store = configureStore({
  reducer: reducers,
});

export default store;
