import { put, takeLatest } from 'redux-saga/effects';
import { setCookie } from '../../components/utils/auth';
import { LOGIN, LOGIN_FAILURE } from '../actions/auth';
import { SAVE_TOKEN } from '../actions/token';

function* login(action) {
  try {
    const response = yield fetch(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      }
    );

    if (response.ok) {
      const data = yield response.json();
      const token = data.access_token;
      setCookie('token', token);
      yield put({ type: SAVE_TOKEN, payload: token });
    } else if (response.status === 401) {
      yield put({ type: LOGIN_FAILURE, payload: response.status });
    }
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export default loginSaga;
