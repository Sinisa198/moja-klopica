import { put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_OWNER, SET_ALL_OWNER } from '../actions/owner';

function* getAllOwner() {
  const response = yield fetch(`${process.env.REACT_APP_API_URL}/owner`).then(
    (response) => response.json()
  );

  yield put({ type: SET_ALL_OWNER, payload: response });
}

function* ownerSaga() {
  yield takeLatest(GET_ALL_OWNER, getAllOwner);
}

export default ownerSaga;
