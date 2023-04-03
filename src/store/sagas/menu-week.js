import { put, takeLatest } from 'redux-saga/effects';
import { MENU_WEEK } from '../actions/restaurant';

function* menuWeek(data) {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/dev/restaurant/5/menu/week',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.payload),
    }
  ).then((response) => response.json());
  yield put({ type: MENU_WEEK, payload: response });
}

function* menuWeekSaga() {
  yield takeLatest(MENU_WEEK, menuWeek);
}

export default menuWeekSaga;
