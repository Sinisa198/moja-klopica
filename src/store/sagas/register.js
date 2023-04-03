import { put, takeLatest } from 'redux-saga/effects';
import { REGISTER, SET_REGISTER } from '../actions/register';

function* register(data) {
  const response = yield fetch(`${process.env.REACT_APP_API_URL}/client`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data.payload),
  }).then((response) => response.json());

  yield put({ type: SET_REGISTER, payload: response });
}

function* registerSaga() {
  yield takeLatest(REGISTER, register);
}

export default registerSaga;
