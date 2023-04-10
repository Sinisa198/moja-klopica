import { takeLatest } from 'redux-saga/effects';
import { FORGET_PASSWORD } from '../actions/forget-password';

function* forgetPass(action) {
  const response = yield fetch(
    `${process.env.REACT_APP_API_URL}/auth/password/forgot?email=${action.payload.email}`,
    {
      method: 'GET',
    }
  ).then(() => response.json());
}

function* forgetPasswordSaga() {
  yield takeLatest(FORGET_PASSWORD, forgetPass);
}

export default forgetPasswordSaga;
