import { put, takeLatest } from 'redux-saga/effects';
import { CREATE_ORDER } from '../actions/order';

function* order(data) {
  const response = yield fetch(
    `${process.env.REACT_APP_API_URL}/auth/client/order`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },

      body: JSON.stringify(data.payload),
    }
  ).then((response) => response.json());
  yield put({ type: CREATE_ORDER, payload: response });
}

function* orderSaga() {
  yield takeLatest(CREATE_ORDER, order);
}

export default orderSaga;
