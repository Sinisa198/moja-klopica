import { put, takeLatest } from 'redux-saga/effects';
import { RESET_PASSWORD } from '../actions/reset-password';

function* resetPassword(data) {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/auth/password/reset',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.payload),
    }
  ).then((response) => response.json());
  console.log('response :', response);
  yield put({ type: RESET_PASSWORD, payload: response });
}

function* resetPasswordSaga() {
  yield takeLatest(RESET_PASSWORD, resetPassword);
}

export default resetPasswordSaga;
