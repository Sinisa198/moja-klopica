import { put, takeLatest } from 'redux-saga/effects';
import { REVIEW } from '../actions/review';

function* review(data) {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/dev/review',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.payload),
    }
  ).then((response) => response.json());
  yield put({ type: REVIEW, payload: response });
}

function* reviewSaga() {
  yield takeLatest(REVIEW, review);
}

export default reviewSaga;
