import { put, takeLatest } from 'redux-saga/effects';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  setActiveMenu,
  setActiveRestaurant,
  GET_ALL_RESTAURANT,
  SET_ALL_RESTAURANT,
  SET_ACTIVE_MENU,
  SET_ACTIVE_RESTAURANT,
} from '../actions/restaurant';

function* getAllRestaurant() {
  const response = yield fetch(
    'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/dev/restaurant'
  ).then((response) => response.json());

  yield put({ type: SET_ALL_RESTAURANT, payload: response });
}

function* GetActiveRestaurant() {
  const dispatch = useDispatch();
  const activeRestaurant = useSelector(({ restaurant }) => restaurant);
  useEffect(() => {
    dispatch(setActiveRestaurant());
  }, [dispatch]);
  const response = yield fetch(
    `https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/dev/restaurant/${activeRestaurant.restaurant.id}`
  ).then((response) => response.json());

  yield put({ type: SET_ACTIVE_RESTAURANT, payload: response });
}

function* GetActiveMenu() {
  const dispatch = useDispatch();
  const activeMenu = useSelector(({ restaurant }) => restaurant);
  useEffect(() => {
    dispatch(setActiveMenu());
  }, [dispatch]);
  const response = yield fetch(
    `${process.env.REACT_APP_API_URL}/client${activeMenu.restaurant.menu}`
  ).then((response) => response.json());

  yield put({ type: SET_ACTIVE_MENU, payload: response });
}

function* restraurantSaga() {
  yield takeLatest(
    GET_ALL_RESTAURANT,
    getAllRestaurant,
    GetActiveMenu,
    GetActiveRestaurant
  );
}

export default restraurantSaga;
