export const GET_ALL_RESTAURANT = 'GET_ALL_RESTAURANT';
export const SET_ALL_RESTAURANT = 'SET_ALL_RESTAURANT';
export const SET_ACTIVE_RESTAURANT = 'SET_ACTIVE_RESTAURANT';
export const SET_ACTIVE_MENU = 'SET_ACTIVE_MENU';
export const MENU_WEEK = 'MENU_WEEK';

export const getAllRestaurant = () => ({
  type: GET_ALL_RESTAURANT,
});

export const setAllRestaurant = (payload) => ({
  type: SET_ALL_RESTAURANT,
  payload,
});

export const setActiveMenu = (payload) => ({
  type: SET_ACTIVE_MENU,
  payload,
});

export const setActiveRestaurant = (payload) => ({
  type: SET_ACTIVE_RESTAURANT,
  payload,
});

export const menuWeek = (payload) => ({
  type: MENU_WEEK,
  payload,
});
