import { put, takeLatest } from 'redux-saga/effects';
import { AUTH_CONFIRM } from '../actions/auth';

function* authConfirm(data) {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/auth/confirm?token',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.payload),
    }
  ).then((response) => response.json());
  yield put({ type: AUTH_CONFIRM, payload: response });
}

function* authConfirmSaga() {
  yield takeLatest(AUTH_CONFIRM, authConfirm);
}

export default authConfirmSaga;
