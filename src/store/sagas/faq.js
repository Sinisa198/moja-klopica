import { put, takeLatest } from 'redux-saga/effects';
import { CREATE_FAQ, GET_ALL_FAQ } from '../actions/faq';

function* faq(data) {
  const response = yield fetch(`${process.env.REACT_APP_API_URL}/faq`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },

    body: JSON.stringify(data.payload),
  }).then((response) => response.json());
  yield put({ type: GET_ALL_FAQ, payload: response });
}

function* faqSaga() {
  yield takeLatest(CREATE_FAQ, faq);
}

export default faqSaga;
