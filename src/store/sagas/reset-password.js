import { put, takeLatest } from 'redux-saga/effects';
import { RESET_PASSWORD } from '../actions/reset-password';

function* resetPassword(data) {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/dev/auth/password/forgot',
    {
      method: 'GET',
    }
  ).then((response) => response.json());
}

function* resetPasswordSaga() {
  yield takeLatest(RESET_PASSWORD, resetPassword);
}

export default resetPasswordSaga;
