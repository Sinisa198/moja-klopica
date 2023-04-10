import { put, takeLatest } from 'redux-saga/effects';
import { REVIEW } from '../actions/review';

function* review(data) {
  const response = yield fetch(`${process.env.REACT_APP_API_URL}/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data.payload),
  }).then((response) => response.json());
  yield put({ type: REVIEW, payload: response });
}

function* reviewSaga() {
  yield takeLatest(REVIEW, review);
}

export default reviewSaga;
