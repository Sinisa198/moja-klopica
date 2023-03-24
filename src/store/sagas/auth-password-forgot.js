import { put, takeLatest } from 'redux-saga/effects';
import { AUTH_PASSWORD_FORGOT } from '../actions/auth';

function* authPasswordForgot(data) {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/auth/password/forgot',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.payload),
    }
  ).then((response) => response.json());
  console.log('response :', response);
  yield put({ type: AUTH_PASSWORD_FORGOT, payload: response });
}

function* authPasswordForgotSaga() {
  yield takeLatest(AUTH_PASSWORD_FORGOT, authPasswordForgot);
}

export default authPasswordForgotSaga;
