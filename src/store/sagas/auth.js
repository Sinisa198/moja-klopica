import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN, SET_USER } from '../actions/auth';

function* login(data) {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.payload),
    }
  ).then((response) => response.json());
  console.log('response :', response);
  yield put({ type: SET_USER, payload: response });
}

function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export default loginSaga;
