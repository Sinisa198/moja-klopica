import { put, takeLatest } from 'redux-saga/effects';
import { ADD_FOOD, GET_FOOD } from '../actions/food';

function* getFoods() {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/dev/client'
  ).then(async (response) => response.json());

  yield put({ type: ADD_FOOD, payload: response });
}

function* foodSaga() {
  yield takeLatest(GET_FOOD, getFoods);
}

export default foodSaga;
