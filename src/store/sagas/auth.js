import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN } from '../actions/auth';
import { SAVE_TOKEN } from '../actions/token';

function* login(action) {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/dev/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    }
  ).then((response) => response.json());

  // yield put({ type: LOGIN, payload: response });
  yield put({ type: SAVE_TOKEN, payload: response.access_token });
  console.log(response.access_token);
}
function* loginSaga() {
  yield takeLatest(LOGIN, login);
}
export default loginSaga;
