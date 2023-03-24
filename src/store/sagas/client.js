import { put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_CLIENTS, SET_ALL_CLIENTS } from '../actions/client';

function* getAllClients() {
  console.log(process.env.REACT_APP_API_URL.client);
  const response = yield fetch(`${process.env.REACT_APP_API_URL}/client`).then(
    (response) => response.json()
  );

  yield put({ type: SET_ALL_CLIENTS, payload: response });
}

function* clientSaga() {
  yield takeLatest(GET_ALL_CLIENTS, getAllClients);
}

export default clientSaga;
