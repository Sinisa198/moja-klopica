import { call, put, takeLatest } from 'redux-saga/effects';
import {
  CONFIRM_TOKEN_REQUEST,
  confirmTokenSuccess,
  confirmTokenFailure,
} from '../actions/auth-confirm';

function* confirmToken(action) {
  try {
    const url = `${process.env.REACT_APP_API_URL}auth/confirm?token=${action.payload.token}`;
    const response = yield call(fetch, url);
    if (response.ok) {
      yield put(confirmTokenSuccess());
    } else {
      const error = yield response.json();
      yield put(confirmTokenFailure(error));
    }
  } catch (error) {
    yield put(confirmTokenFailure(error));
  }
}

function* authConfirmSaga() {
  yield takeLatest(CONFIRM_TOKEN_REQUEST, confirmToken);
}

export default authConfirmSaga;
