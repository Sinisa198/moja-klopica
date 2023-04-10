import { put, takeLatest } from 'redux-saga/effects';
import { AUTH_PROFILE, SET_USER } from '../actions/auth';
import { getCookie } from '../../components/utils/auth';

function* getProfile() {
  const response = yield fetch(
    `${process.env.REACT_APP_API_URL}/auth/profile`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers':
          'Content-Type, Authorization, Content-Length, X-Requested-With',
        Authorization: `Bearer ${getCookie('token')}`,
      },
    }
  ).then((response) => response.json());
  yield put({ type: SET_USER, payload: response });
}

function* authProfileSaga() {
  yield takeLatest(AUTH_PROFILE, getProfile);
}

export default authProfileSaga;
