import { takeLatest, put } from 'redux-saga/effects';
import { getCookie } from '../../components/utils/auth';
import { GET_ALL_CLIENTS } from '../actions/client';
import { SAVE_TOKEN } from '../actions/token';

function* getAllClients(action) {
  const response = yield fetch(`${process.env.REACT_APP_API_URL}/auth/client`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
    },
    body: JSON.stringify(action.payload),
  }).then(() => response.json());

  yield put({ type: SAVE_TOKEN, payload: response.access_token });
}

function* clientSaga() {
  yield takeLatest(GET_ALL_CLIENTS, getAllClients);
}

export default clientSaga;
