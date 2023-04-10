import { put, takeLatest } from 'redux-saga/effects';
import { RESET_PASSWORD } from '../actions/reset-password';
import { getCookie, setCookie } from '../../components/utils/auth';
import { SAVE_TOKEN } from '../actions/token';

function* resetPasswordFunction(action) {
  const response = yield fetch(
    `${process.env.REACT_APP_API_URL}/client/password`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers':
          'Content-Type, Authorization, Content-Length, X-Requested-With',
        Authorization: `Bearer ${getCookie('token')}`,
      },
      body: JSON.stringify(action.payload),
    }
  ).then((response) => response.json());
  yield put({ type: SAVE_TOKEN, payload: response.access_token });
  setCookie('token', response.access_token);
}
function* resetPasswordSaga() {
  yield takeLatest(RESET_PASSWORD, resetPasswordFunction);
}
export default resetPasswordSaga;
