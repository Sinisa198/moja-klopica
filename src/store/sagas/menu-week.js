import { put, takeLatest } from 'redux-saga/effects';
import { MENU_WEEK } from '../actions/restaurant';
import { getCookie } from '../../components/utils/auth';

function* menuWeek(data) {
  const response = yield fetch(
    `${process.env.REACT_APP_API_URL}/auth/client/restaurant/5/menu/all`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('token')}`,
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
