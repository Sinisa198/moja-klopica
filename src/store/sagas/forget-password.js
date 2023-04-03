import { takeLatest } from 'redux-saga/effects';
import { FORGET_PASSWORD } from '../actions/forget-password';

function* forgetPass(action) {
  console.log(action);
  const response = yield fetch(
    `https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/dev/auth/password/forgot?email=${action.payload.email}`,
    {
      method: 'GET',
    }
  ).then(() => response.json());
}

function* forgetPasswordSaga() {
  yield takeLatest(FORGET_PASSWORD, forgetPass);
}

export default forgetPasswordSaga;
