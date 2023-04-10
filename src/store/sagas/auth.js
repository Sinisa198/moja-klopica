import { put, takeLatest } from 'redux-saga/effects';
import { setCookie } from '../../components/utils/auth';
import { LOGIN } from '../actions/auth';
import { SAVE_TOKEN } from '../actions/token';

function* login(action) {
  const response = yield fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.payload),
  }).then((response) => response.json());

  yield put({ type: SAVE_TOKEN, payload: response.access_token });
  setCookie('token', response.access_token);
}
function* loginSaga() {
  yield takeLatest(LOGIN, login);
}
export default loginSaga;
