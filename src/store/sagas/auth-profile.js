import { put, takeLatest } from 'redux-saga/effects';
import { AUTH_PROFILE } from '../actions/auth';

function* authProfile(data) {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/auth/profile',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.payload),
    }
  ).then((response) => response.json());
  console.log('response :', response);
  yield put({ type: AUTH_PROFILE, payload: response });
}

function* authProfileSaga() {
  yield takeLatest(AUTH_PROFILE, authProfile);
}

export default authProfileSaga;
